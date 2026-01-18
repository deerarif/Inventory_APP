import React, { useState } from "react";

function FILTERS(props) {
  const [Inputs, setInputs] = useState();
  const Hadnle_Filter = () => {
    props.handleAddFilters(Inputs);
    document.getElementById("Filters").value = "";
  };
  return (
    <>
      <div className="fixed flex inset-0 bg-black/90 justify-center z-50 pt-50 cursor-default">
        <div className="h-fit pt-0 px-10 pb-10 w-90 bg-white/25 rounded-sm flex flex-col gap-3 justify-center items-center">
          <div className="box1 h-12 w-75 text-amber-50 flex justify-center items-center font-bold">
            Filter Data
          </div>
          <input
            type="text"
            id="Filters"
            className="box1 h-12 w-75 bg-gray-900 rounded-sm active:border-0 text-white px-2"
            placeholder="Silahkan masukkan filter...."
            onChange={(e) => setInputs(e.target.value)}
          />
          <div className="box1 h-12 w-75 flex justify-between">
            <div
              className="h-12 w-fill px-3 border-1 border-red-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-red-300 text-[1rem] flex items-center justify-center"
              onClick={() => props.filterbtn(false)}
            >
              BACK
            </div>
            <div
              className="h-12 w-fill px-3 border-1 border-green-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-green-300 text-[1rem] flex items-center justify-center"
              onClick={Hadnle_Filter}
            >
              Add Filter
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FILTERS;
