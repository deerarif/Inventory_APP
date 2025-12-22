import React, { useState } from "react";
import axios from "axios";
function ADDNEWDOCS(props) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState(null);
  // Handle file selection
  const handleFileChange = (event) => {
    // Get the first file from the selection
    setFile(event.target.files[0]);
  };
  async function sendDataDocs(ID, NAME) {
    const url = "http://localhost:8990/API/documents/";
    const Datafile = {
      Label_Barcode: ID,
      Deskripsi: NAME,
      Path: await sendFile(ID),
    };
    try {
      const res = await axios.post(url, Datafile);
      if (res.status === 200) {
        console.log(res);
        alert("success add to database");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function sendFile(ID) {
    const formData = new FormData();
    const url = "http://localhost:8990/API/upload/" + ID;
    formData.append("Documents", file);
    try {
      const res = await axios.post(url, formData);
      if (res.status === 200) {
        console.log(res.data);
        alert("success upload file");
        return res.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        id="Test1"
        className="fixed flex inset-0 bg-black/90 justify-center z-50 pt-50 cursor-default"
      >
        <div className="h-fit pt-0 px-10 pb-10 w-90 bg-white/25 rounded-sm flex flex-col gap-3 justify-center items-center">
          <div className="box1 h-12 w-75 text-amber-50 flex justify-center items-center font-bold">
            Add New Docs For {props.dataID}
          </div>
          <input
            type="text"
            className="box1 h-12 w-75 bg-gray-900 rounded-sm active:border-0 text-white px-2"
            placeholder="Nama Documents"
            onChange={(event) => setMessage(event.target.value)}
          />
          <div className="box1 h-12 w-75 flex content-center">
            <div className="h-12 w-[65%]  bg-gray-900 rounded-sm active:border-0 text-white/50 px-2 flex items-center overflow-hidden">
              {file === null ? "PATH" : file.name}
            </div>
            <div className="h-12 w-[5%]"></div>
            <div
              className="relative h-12 w-[30%] border border-green-300 rounded-sm
                bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500
                font-extralight text-green-300 text-[1rem]
                flex items-center justify-center cursor-pointer"
            >
              <span>UPLOAD</span>

              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="box1 h-12 w-75 flex justify-between">
            <div
              className="h-12 w-[30%] border-1 border-red-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-red-300 text-[1rem] flex items-center justify-center"
              onClick={() => props.state(false)}
            >
              CANCEL
            </div>
            <div
              className="h-12 w-[30%] border-1 border-green-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-green-300 text-[1rem] flex items-center justify-center"
              onClick={() => {
                if (!props.dataID || !message || !file) {
                  alert("Data Tidak lengkap");
                  return;
                }
                sendDataDocs(props.dataID, message, file.name);
                props.state(false);
              }}
            >
              SUBMIT
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ADDNEWDOCS;
