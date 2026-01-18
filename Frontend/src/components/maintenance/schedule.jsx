import { faCamera, faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const url = import.meta.env.VITE_URL;
import CAMERAS from "./camera";
import { useNavigate } from "react-router-dom";
function MAINTENANCE_SCHEDULE() {
  const [DataMaintenance, setDataMaintenance] = useState();
  const [Reloaders, setReloaders] = useState();
  const [Camstate, setCamstate] = useState();
  const [IDs, setIDs] = useState();
  const [Card, setCard] = useState();
  const Note = {};
  const navigate = useNavigate();
  async function sendData(id, note) {
    if (!note) {
      alert("Silahkan isi notes");
      return;
    }
    const res = await axios.post(url + "/API/maintenance", {
      id: id,
      Note: note,
    });
    if (res.status == 200) {
      alert("Data Succesed");

      setCamstate(true);
      setReloaders(Date.now());
    }
  }
  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get(url + "/API/maintenance");
      if (res.status == 200) {
        setDataMaintenance(res.data);
      }
    }
    setCard(
      "card1  bg-gray-900/10 h-fit w-80 flex flex-col items-start gap-3 justify-start border border-amber-50/10 rounded-sm"
    );
    fetchdata();
  }, [Reloaders]);
  return (
    <>
      {/* "card1  bg-gray-900/10 h-fit w-80 flex flex-col items-start gap-3 justify-start border border-amber-50/10 rounded-sm" */}
      <div className="absolute max-sm:relative inset-0 h-[100%] max-sm:flex-col text-[0.8rem] bg-gray-900/10 text-neutral-50 font-mono font-medium ml-13 items-center justify-center flex flex-row gap-10">
        {Camstate ? (
          <CAMERAS state={setCamstate} showcard={setCard} id={IDs} />
        ) : null}
        {DataMaintenance
          ? Object.entries(DataMaintenance).map(([id, values]) => {
              const [name, unit, location] = values;
              Note[id] = "";
              return (
                <>
                  <div className={Card} key={id}>
                    <span
                      className="bg-purple-300 text-white h-10 w-full rounded-t-sm text-center content-center font-bold text-lg cursor-context-menu"
                      onClick={() => navigate("/detail/" + id)}
                    >
                      {id}
                    </span>
                    <div className="grid grid-cols-[auto_1rem_1fr] gap-x-2 px-1 font-bold ">
                      <div className="text-start font-medium">User</div>
                      <div className="text-center">:</div>
                      <div>{name}</div>
                      <div className="text-start font-medium">Unit</div>
                      <div className="text-center">:</div>
                      <div>{unit}</div>
                      <div className="text-start font-medium">Lokasi</div>
                      <div className="text-center">:</div>
                      <div className="text-justify pr-1">{location}</div>
                    </div>
                    <textarea
                      name=""
                      className="notes h-100 w-full bg-gray-900/40 p-2 focus:outline-hidden"
                      placeholder="Add notes ..."
                      onChange={(e) => (Note[id] = e.target.value)}
                      id=""
                    ></textarea>

                    <div className="navigate w-full flex items-center justify-evenly pb-2 cursor-pointer">
                      {/* <div className="h-12 w-[30%] border-1 border-red-300 hover:border-red-400 hover:text-red-400 hover:bg-gray-900/10 rounded-sm bg-gray-900/84  active:bg-gray-500 font-extralight text-red-300  text-[1rem] flex items-center justify-center">
                        CANCEL
                      </div> */}
                      <div
                        className="cursor-pointer h-12 w-[30%] border-1 border-blue-300 rounded-sm bg-gray-900/84 hover:border-blue-400 hover:text-blue-400 hover:bg-gray-900/10 active:bg-gray-500 font-extralight text-blue-300 text-[1rem] flex items-center justify-center"
                        onClick={() => {
                          setIDs(id);
                          setCard("hidden");
                          setCamstate(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCamera} size="xl" />
                      </div>
                      <div
                        className="cursor-pointer h-12 w-[30%] border-1 border-green-300 rounded-sm bg-gray-900/84 hover:border-green-400 hover:text-green-400 hover:bg-gray-900/10 active:bg-gray-500 font-extralight text-green-300 text-[1rem] flex items-center justify-center"
                        onClick={() => sendData(id, Note[id])}
                      >
                        SUBMIT
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          : null}
      </div>
    </>
  );
}

export default MAINTENANCE_SCHEDULE;
