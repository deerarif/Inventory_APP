import {
  faSearch,
  faFilter,
  faPlusCircle,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MAINTENANCE_SCHEDULE() {
  return (
    <>
      <div className="absolute inset-0 h-[100%] text-[0.8rem] bg-gray-900/10 text-neutral-50 font-mono font-medium ml-13 items-center justify-center flex flex-row gap-10">
        <div className="card1 bg-gray-900/10 h-150 w-80 flex flex-col items-start gap-1">
          <span className="bg-purple-300 text-white h-10 w-full rounded-t-sm text-center content-center font-bold text-lg">
            12938
          </span>
          <div className="grid grid-cols-[auto_1rem_1fr] gap-x-2 px-1 font-bold ">
            <div className="text-start font-medium">User</div>
            <div className="text-center">:</div>
            <div>Arif</div>
            <div className="text-start font-medium">Unit</div>
            <div className="text-center">:</div>
            <div>SIMRS</div>
            <div className="text-start font-medium">Lokasi</div>
            <div className="text-center">:</div>
            <div className="text-justify pr-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              excepturi
            </div>
          </div>
          {/* <span className="bg-purple-300 text-white h-10 w-full rounded-t-sm text-center content-center font-bold text-lg">
            12938
          </span>
          <div className="info w-full flex flex-col gap-1 content-stretch font-bold">
            <div className="one flex flex-row text-justify">
              <ul className="list-disc pl-5">
                <li>User</li>
              </ul>
              <span className="px-2">: Arif</span>
            </div>
            <div className="one flex flex-row text-justify">
              <ul className="list-disc pl-5">
                <li>Unit</li>
              </ul>
              <span className="px-2">: SIMRS</span>
            </div>
            <div className="one flex flex-row text-justify">
              <ul className="list-disc pl-5">
                <li>Lokasi</li>
              </ul>
              <span className="px-2">: Lantai 4 Ruang Simrs nomer 427</span>
            </div>
          </div> */}
          <textarea
            name=""
            className="notes h-[60%] w-full bg-gray-900/40 p-2"
            placeholder="Add notes ..."
            id=""
          ></textarea>

          <div className="navigate h-[10%] w-full bg-amber-50"></div>
        </div>
        <div className="card1 bg-amber-300 h-100 w-100"></div>
        <div className="card1 bg-amber-300 h-100 w-100"></div>
      </div>
    </>
  );
}

export default MAINTENANCE_SCHEDULE;
