import React, { useEffect, useRef, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

async function getZxing() {
  const { BrowserMultiFormatReader } = await import("@zxing/browser");
  const { DecodeHintType, BarcodeFormat } = await import("@zxing/library");
  const hints = new Map();
  hints.set(DecodeHintType.TRY_HARDER, true);
  hints.set(DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.CODE_128]);
  return new BrowserMultiFormatReader(hints);
}

// ── All image processing passes applied to a canvas ctx ──
const PASSES = [
  { label: "Original", filter: "none" },
  {
    label: "High contrast",
    filter: "contrast(2) brightness(1.1) grayscale(1)",
  },
  { label: "Sharpen", filter: "contrast(1.8) brightness(1.05) grayscale(1)" },
  { label: "Darken", filter: "contrast(2.2) brightness(0.85) grayscale(1)" },
  { label: "Brighten", filter: "contrast(1.6) brightness(1.4) grayscale(1)" },
  { label: "Max contrast", filter: "contrast(3) brightness(1.0) grayscale(1)" },
  { label: "Invert", filter: "invert(1) contrast(1.8) grayscale(1)" },
  { label: "Soft", filter: "contrast(1.3) brightness(1.2) grayscale(1)" },
];

// ── Strips of the image to try (vertical coverage) ──
const STRIPS = [
  { label: "Full", sy: 0.0, sh: 1.0 },
  { label: "Center 30%", sy: 0.35, sh: 0.3 },
  { label: "Center 50%", sy: 0.25, sh: 0.5 },
  { label: "Top half", sy: 0.0, sh: 0.5 },
  { label: "Bottom half", sy: 0.5, sh: 0.5 },
  { label: "Top third", sy: 0.0, sh: 0.33 },
  { label: "Mid third", sy: 0.33, sh: 0.34 },
  { label: "Bot third", sy: 0.67, sh: 0.33 },
];

// ── Scale variants to try ──
const SCALES = [1.0, 1.5, 2.0, 0.75];

function drawStrip(srcCanvas, scale, sy_ratio, sh_ratio, filter) {
  const sw = Math.round(srcCanvas.width * scale);
  const sh = Math.round(srcCanvas.height * sh_ratio * scale);
  const sy = Math.round(srcCanvas.height * sy_ratio * scale);

  const tmp = document.createElement("canvas");
  tmp.width = sw;
  tmp.height = sh;
  const ctx = tmp.getContext("2d");

  // Scale up source first
  const scaled = document.createElement("canvas");
  scaled.width = Math.round(srcCanvas.width * scale);
  scaled.height = Math.round(srcCanvas.height * scale);
  const sctx = scaled.getContext("2d");
  sctx.filter = filter;
  sctx.drawImage(srcCanvas, 0, 0, scaled.width, scaled.height);
  sctx.filter = "none";

  ctx.drawImage(scaled, 0, sy, sw, sh, 0, 0, sw, sh);
  return ctx.getImageData(0, 0, sw, sh);
}

function SCAN_BARCODE() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const detectorRef = useRef(null);
  const zxingRef = useRef(null);

  const [camReady, setCamReady] = useState(false);
  const [flash, setFlash] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | processing | error
  const [errorMsg, setErrorMsg] = useState("");
  const [progress, setProgress] = useState(0); // 0–100
  const [passLabel, setPassLabel] = useState(""); // current pass name
  const [passCount, setPassCount] = useState(0); // passes completed
  const [totalPasses] = useState(PASSES.length * STRIPS.length * SCALES.length);

  const navigate = useNavigate();

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      try {
        // Load both detectors upfront
        const [zxing] = await Promise.all([getZxing()]);
        zxingRef.current = zxing;

        if ("BarcodeDetector" in window) {
          const supported = await BarcodeDetector.getSupportedFormats();
          if (supported.includes("code_128")) {
            detectorRef.current = new BarcodeDetector({
              formats: ["code_128"],
            });
          }
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: "environment" },
            width: { ideal: 1920 },
            height: { ideal: 1080 },
            focusMode: { ideal: "continuous" },
            exposureMode: { ideal: "continuous" },
          },
        });

        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;

        stream
          .getVideoTracks()[0]
          ?.applyConstraints?.({
            advanced: [{ focusMode: "continuous" }],
          })
          .catch(() => {});

        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setCamReady(true);
      } catch (err) {
        setErrorMsg("Camera error: " + err.message);
        setStatus("error");
      }
    };
    init();
    return () => {
      cancelled = true;
      stopCamera();
    };
  }, []);

  const handleCapture = useCallback(async () => {
    if (status === "processing" || !camReady) return;

    // Flash
    setFlash(true);
    setTimeout(() => setFlash(false), 120);

    setStatus("processing");
    setProgress(0);
    setPassCount(0);
    setErrorMsg("");

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(video, 0, 0);

    // ── Give React time to render loading UI ──
    await new Promise((r) => setTimeout(r, 60));

    let found = null;
    let completed = 0;

    // ── Quick native pass first ──
    if (detectorRef.current) {
      try {
        const results = await detectorRef.current.detect(canvas);
        if (results.length > 0) {
          stopCamera();
          navigate("/detail/" + results[0].rawValue);
          return;
        }
      } catch (_) {}
    }

    // ── Exhaustive ZXing passes: all scales × all strips × all filters ──
    outer: for (const scale of SCALES) {
      for (const strip of STRIPS) {
        for (const pass of PASSES) {
          completed++;
          const pct = Math.round((completed / totalPasses) * 100);
          setProgress(pct);
          setPassLabel(`${pass.label} · ${strip.label} · ${scale}×`);
          setPassCount(completed);

          // Yield to UI thread every 4 passes
          if (completed % 4 === 0) {
            await new Promise((r) => setTimeout(r, 10));
          }

          try {
            const imageData = drawStrip(
              canvas,
              scale,
              strip.sy,
              strip.sh,
              pass.filter,
            );
            const result = zxingRef.current.decodeFromImageData(imageData);
            if (result) {
              found = result.getText();
              break outer;
            }
          } catch (_) {}
        }
      }
    }

    if (found) {
      setProgress(100);
      setPassLabel("Found!");
      await new Promise((r) => setTimeout(r, 300));
      stopCamera();
      navigate("/detail/" + found);
    } else {
      setStatus("error");
      setErrorMsg("No barcode found. Ensure barcode is inside the red guide.");
      setTimeout(() => {
        setStatus("idle");
        setProgress(0);
        setPassLabel("");
      }, 3000);
    }
  }, [status, camReady, totalPasses, stopCamera, navigate]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 gap-4">
      <canvas ref={canvasRef} className="hidden" />

      {/* Viewfinder */}
      <div
        className="relative w-[90%] max-w-md rounded-lg overflow-hidden bg-black"
        style={{ aspectRatio: "3/2" }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          muted
        />

        {/* Flash */}
        {flash && (
          <div className="absolute inset-0 bg-white z-20 pointer-events-none" />
        )}

        {/* Scan zone overlay */}
        <div className="absolute inset-0 flex flex-col pointer-events-none">
          <div className="flex-1 bg-black/50" />
          <div
            className="relative border-y-2 border-red-500"
            style={{ height: "24%" }}
          >
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-[2px] bg-red-500/70" />
            {[
              "top-0 left-0 border-t-2 border-l-2",
              "top-0 right-0 border-t-2 border-r-2",
              "bottom-0 left-0 border-b-2 border-l-2",
              "bottom-0 right-0 border-b-2 border-r-2",
            ].map((cls, i) => (
              <div
                key={i}
                className={`absolute w-5 h-5 border-red-400 ${cls}`}
              />
            ))}
          </div>
          <div className="flex-1 bg-black/50" />
        </div>

        {/* Camera init */}
        {!camReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
            <p className="text-white/50 text-xs tracking-widest animate-pulse">
              STARTING CAMERA...
            </p>
          </div>
        )}

        {/* Processing overlay */}
        {status === "processing" && (
          <div className="absolute inset-0 bg-black/75 z-10 flex flex-col items-center justify-center gap-3 px-6">
            {/* Circular progress ring */}
            <div className="relative w-16 h-16">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="4"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke={progress === 100 ? "#4ade80" : "#ef4444"}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
                  style={{
                    transition: "stroke-dashoffset 0.1s ease, stroke 0.3s",
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs font-light">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Pass counter */}
            <div className="text-center">
              <p className="text-white/90 text-xs tracking-widest font-light">
                ANALYZING IMAGE
              </p>
              <p className="text-white/40 text-[10px] mt-1">
                {passCount} / {totalPasses} passes
              </p>
            </div>

            {/* Current pass label */}
            <div className="w-full bg-white/5 rounded px-3 py-1.5 text-center">
              <p className="text-white/50 text-[10px] tracking-wide truncate">
                {passLabel || "Initializing..."}
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-100"
                style={{
                  width: `${progress}%`,
                  background:
                    progress === 100
                      ? "#4ade80"
                      : "linear-gradient(90deg, #ef4444, #f97316)",
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Status text */}
      <div className="h-6 flex items-center px-4">
        {status === "error" && (
          <p className="text-red-400 text-xs tracking-wide text-center">
            {errorMsg}
          </p>
        )}
        {status === "idle" && camReady && (
          <p className="text-gray-500 text-xs tracking-widest">
            ALIGN BARCODE · PRESS CAPTURE
          </p>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6">
        <button
          className="h-10 w-24 border border-red-300/60 rounded-sm bg-gray-900/80
            hover:bg-gray-800 active:bg-gray-600 font-extralight text-red-300
            text-xs tracking-widest transition-colors"
          onClick={() => {
            stopCamera();
            navigate(-1);
          }}
        >
          BACK
        </button>

        {/* Shutter */}
        <button
          disabled={!camReady || status === "processing"}
          onClick={handleCapture}
          className={`relative w-16 h-16 rounded-full border-4 transition-all
            ${
              camReady && status !== "processing"
                ? "border-white bg-white/10 hover:bg-white/20 active:scale-95"
                : "border-white/20 bg-white/5 cursor-not-allowed"
            }`}
        >
          <div
            className={`absolute inset-2 rounded-full transition-all
            ${camReady && status !== "processing" ? "bg-white" : "bg-white/20"}`}
          />
        </button>

        <div className="w-24" />
      </div>
    </div>
  );
}

export default SCAN_BARCODE;
