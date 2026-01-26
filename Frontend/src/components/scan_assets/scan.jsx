import React, { useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { useNavigate } from "react-router-dom";
function SCAN_BARCODE(props) {
  const videoRef = useRef(null);
  const codeReader = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    codeReader.current = new BrowserMultiFormatReader();

    const constraints = {
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1920 },
        height: { ideal: 1080 },
      },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }

        codeReader.current.decodeFromVideoElement(
          videoRef.current,
          (result, error) => {
            if (result) {
              navigate("/detail/" + result.getText());
            }
          },
        );
      })
      .catch((err) => {
        console.error("Failed to start camera:", err);
      });

    // return () => {
    // if (result && !scannedRef.current) {
    //   scannedRef.current = true;
    //   alert(result.getText());
    // }
    // if (videoRef.current && videoRef.current.srcObject) {
    //   videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    // }
    // };
  }, []);

  return (
    <>
      <div className="fixed flex flex-col inset-0 bg-black/90 justify-center z-50 pt-50 max-sm:p-0 cursor-default gap-3 items-center">
        <div className="h-fit w-[30%] rounded-sm bg-gray-950 flex justify-center max-sm:w-fit">
          <div className="size-full">
            <video ref={videoRef} className="w-full h-full" />
          </div>
        </div>
        <div
          className="h-10 w-50 mt-8 max-sm:mt-0 max-sm:m-0 px-3 border border-red-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-red-300 text-[1rem] flex items-center justify-center"
          onClick={() => navigate("/")}
        >
          BACK
        </div>
      </div>
    </>
  );
}

export default SCAN_BARCODE;
