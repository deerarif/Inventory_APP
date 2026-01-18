import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import axios from "axios";
function dataURLtoBlob(dataURL) {
  const arr = dataURL.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], { type: mime });
}
export default function CAMERAS(props) {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  async function postImage(ID) {
    const url = import.meta.env.VITE_URL + "/API/upload/" + ID;

    const formData = new FormData();
    const imageBlob = dataURLtoBlob(imageSrc);

    formData.append("Documents", imageBlob, "capture.jpg");

    try {
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        console.log(res.data);
        alert("success upload file");
        props.state(false);
      }
    } catch (error) {
      console.error(error);
      alert("upload failed");
    }
  }
  const capture = useCallback(() => {
    const screenshot = webcamRef.current.getScreenshot();
    setImageSrc(screenshot);
  }, []);

  const cancelImage = () => {
    setImageSrc(null); // go back to webcam
  };

  return (
    <div className="absolute inset-0  flex flex-col items-center h-dvh bg-gray-900">
      {/* CAMERA OR IMAGE */}
      {!imageSrc ? (
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={{
            facingMode: { ideal: "environment" },
          }}
          className="bg-gray-400 rounded-sm"
        />
      ) : (
        <img src={imageSrc} alt="Captured" className="max-w-full rounded-sm" />
      )}

      {/* BUTTONS */}
      <div className="mt-20 flex justify-center gap-6 w-full">
        {!imageSrc ? (
          <>
            <button
              onClick={() => {
                props.showcard(
                  "card1  bg-gray-900/10 h-fit w-80 flex flex-col items-start gap-3 justify-start border border-amber-50/10 rounded-sm"
                );
                props.state(false);
              }}
              className="h-12 px-10 border border-red-300 rounded-sm
                 bg-gray-900/84 hover:border-red-400 hover:text-red-400 hover:bg-gray-900/10 active:bg-gray-500
                 text-red-300 text-[1rem] cursor-pointer"
            >
              BACK
            </button>
            <button
              onClick={capture}
              className="h-12 px-10 border border-blue-300 rounded-sm
                 bg-gray-900/84 hover:border-blue-400 hover:text-blue-400 hover:bg-gray-900/10 active:bg-gray-500
                 text-blue-300 text-[1rem] cursor-pointer"
            >
              CAPTURE
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => postImage(props.id)}
              className="h-12 px-10 border border-green-300 rounded-sm
                   bg-gray-900/84 hover:border-green-400 hover:text-green-400 hover:bg-gray-900/10 active:bg-gray-500
                   text-green-300 text-[1rem] cursor-pointer"
            >
              POST
            </button>

            <button
              onClick={cancelImage}
              className="h-12 px-10 border border-red-300 rounded-sm
                   bg-gray-900/84 hover:border-red-400 hover:text-red-400 hover:bg-gray-900/10 active:bg-gray-500
                   text-red-300 text-[1rem] cursor-pointer"
            >
              CANCEL
            </button>
          </>
        )}
      </div>
    </div>
  );
}
