import React, { useState, useRef, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const url = import.meta.env.VITE_URL;


export default function ANTIVIRUS(props) {
  const navigate = useNavigate();
  const Form_data = {
    ANTV_KEY: "",
    DATE: "",
  };
  async function add_antvs(data_form){
    try {
      const res = await axios.post(url + "/API/antv_add/", data_form);
      if (res.status === 200) {
        alert("Add New Data Success");
        navigate("/");
      }
    } catch (err) {
      alert(err + "\nCheck For Duplicate Barcode/ID");
      console.log(err);
    }
  }
  function formatDate(dateStr) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  }
  const handleInput = (e, data_name) => {
    if (data_name) {
      Form_data[data_name] = e.target.value;
    }
  };
  return (
    <>
      <div className="absolute inset-0 max-sm:relative text-[0.8rem] text-neutral-50 font-mono font-medium flex justify-center max-sm:min-h-screen">
        <div className="rounded-[5px] w-full max-w-6xl h-full max-sm:h-auto flex flex-row p-10 max-sm:p-4 gap-10 items-center max-sm:items-start">
          <div className="h-[70%] max-sm:h-auto w-full rounded-sm flex items-center max-sm:items-start">
            <div className="box1 text-white/90 flex font-bold w-full h-fit bg-gray-700/50 rounded-lg">
              <form
                action=""
                className="flex flex-row gap-10 max-sm:gap-4 w-full h-full items-center p-10 max-sm:p-4 max-sm:flex-col"
              >
                {/* Column 1 */}
                <div className="flex flex-col gap-5 max-sm:gap-3 w-full">
                  <input
                    type="text"
                    placeholder="Kaspersky Code"
                    className="bg-gray-700/50 px-3 max-sm:px-2 font-light h-10 max-sm:h-12 rounded-sm hover:bg-gray-600 focus:outline-0 focus:ring-0 max-sm:text-base"
                    onChange={(e) => handleInput(e, "ANTV_KEY")}
                  />
                  <input
                    type="date"
                    placeholder="Expired Kaspersky"
                    className="bg-gray-700/50 px-3 max-sm:px-2 font-light h-10 max-sm:h-12 rounded-sm hover:bg-gray-600 focus:outline-0 focus:ring-0 max-sm:text-base"
                    onChange={(e) => handleInput(e, "DATE")}
                  />
                  {/* Buttons */}
                  <div className="flex flex-row max-sm:flex-col gap-3 max-sm:gap-3 cursor-default mt-2 max-sm:mt-1">
                    <div
                      className="h-10 max-sm:h-12 w-full px-3 border border-red-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-red-300 text-[1rem] max-sm:text-base flex items-center justify-center transition-colors cursor-pointer"
                      onClick={() => navigate("/")}
                    >
                      BACK
                    </div>
                    <div
                      className="h-10 max-sm:h-12 w-full px-3 border border-green-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-green-300 text-[1rem] max-sm:text-base flex items-center justify-center transition-colors cursor-pointer"
                      onClick={() => {
                        if (
                          !Form_data.ANTV_KEY ||
                          !Form_data.DATE
                        ) {
                          alert("Data tidak lengkap silahkan lengkapi data");
                          return;
                        }
                        Form_data.DATE = formatDate(Form_data.DATE);
                        add_antvs(Form_data);
                      }}
                    >
                      SUBMIT
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}