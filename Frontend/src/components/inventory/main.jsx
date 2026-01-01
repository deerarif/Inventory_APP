import {
  faSearch,
  faFilter,
  faPlusCircle,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
import ADDNEWDOCS from "./newdocs";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import THETABLE from "./table";

function INVENTROY() {
  const [Reloadtry, setReloadtry] = useState();
  const [Inventory_data, setInventory_data] = useState();
  const [Search, setSearch] = useState("");
  const [DataHeader, setDataHeader] = useState();
  const [Click, setClick] = useState(true);
  function ClickShit(search) {
    if (Click === search) {
      setSearch("");
      return;
    }
    setSearch(search);
    setClick(search);
  }
  function filterAnything(data, search) {
    if (!search) return data;

    const keyword = search.toLowerCase();

    return data.filter((obj) =>
      Object.values(obj).some((value) =>
        String(value).toLowerCase().includes(keyword)
      )
    );
  }
  const filteredInventory = useMemo(() => {
    return filterAnything(Inventory_data, Search);
  }, [Inventory_data, Search]);
  const DataHeaderSementara = {
    Aktif: 0,
    Tidak_Aktif: 0,
    Perbaikan: 0,
    Rusak: 0,
    Musnah: 0,
    Tidak_digunakan: 0,
  };
  async function fetchdata() {
    await axios
      .get("http://localhost:8990/API/inventory/")
      .then((res) => {
        setInventory_data(res.data);
        res.data.map((data) => {
          if (data.Status === "Aktif") {
            DataHeaderSementara.Aktif++;
          }
          if (data.Status === "Tidak Aktif") {
            DataHeaderSementara.Tidak_Aktif++;
          }
          if (data.Status === "Perbaikan") {
            DataHeaderSementara.Perbaikan++;
          }
          if (data.Status === "Rusak") {
            DataHeaderSementara.Rusak++;
          }
          if (data.Status === "Musnah") {
            DataHeaderSementara.Musnah++;
          }
          if (data.Status === "Tidak Digunakan") {
            DataHeaderSementara.Tidak_digunakan++;
          }
        });
        setDataHeader(DataHeaderSementara);
      })
      .catch((err) => console.log(err));
  }
  const loadData = async () => {
    try {
      await fetchdata();
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    loadData();
  }, [Reloadtry]);
  return (
    <>
      <div className="absolute inset-0 text-[0.8rem] text-neutral-50 font-mono font-medium ml-13">
        <div className="navbar h-15 w-auto content-center">
          <div className="flex flex-row b items-center top-5 gap-x-2 absolute left-3 cursor-default">
            <div
              className=" category h-8 w-25 text-center content-center rounded-2xl bg-green-500 hover:bg-green-700"
              data-value="Aktif"
              onClick={(e) => ClickShit(e.currentTarget.dataset.value)}
            >
              <span>Aktif {DataHeader ? DataHeader.Aktif : "0"}</span>
            </div>
            <div
              className="tools h-8 w-30 bg-pink-400 hover:bg-pink-700 text-center content-center rounded-[25px]"
              data-value="Tidak_aktif"
              onClick={(e) => ClickShit(e.currentTarget.dataset.value)}
            >
              <span>Non Aktif {DataHeader ? DataHeader.Tidak_Aktif : "0"}</span>
            </div>
            <div
              className="tools h-8 w-29 bg-blue-400 hover:bg-blue-700 text-center content-center rounded-[25px]"
              data-value="Perbaikan"
              onClick={(e) => ClickShit(e.currentTarget.dataset.value)}
            >
              <span>Perbaikan {DataHeader ? DataHeader.Perbaikan : "0"}</span>
            </div>
            <div
              className="tools h-8 w-25 bg-red-400 hover:bg-red-500 text-center content-center rounded-[25px]"
              data-value="Rusak"
              onClick={(e) => ClickShit(e.currentTarget.dataset.value)}
            >
              <span>Rusak {DataHeader ? DataHeader.Rusak : "0"}</span>
            </div>
            <div
              className="tools h-8 w-25 bg-gray-400 hover:bg-gray-700 text-center content-center rounded-[25px]"
              data-value="Musnah"
              onClick={(e) => ClickShit(e.currentTarget.dataset.value)}
            >
              <span>Musnah {DataHeader ? DataHeader.Musnah : "0"}</span>
            </div>
            <div
              className="tools h-8 w-40 bg-orange-300 hover:bg-orange-500 text-center content-center rounded-[25px]"
              data-value="Tidak_digunakan"
              onClick={(e) => ClickShit(e.currentTarget.dataset.value)}
            >
              <span>
                Tidak Digunakan {DataHeader ? DataHeader.Tidak_digunakan : "0"}
              </span>
            </div>
          </div>
          <div className="flex flex-row  items-center top-5 absolute right-5 gap-x-1">
            <div className="tools size-8 text-center content-center">
              <FontAwesomeIcon
                icon={faBox}
                size="xl"
                className="hover:text-gray-200"
              />
            </div>
            <div className="tools size-8 text-center content-center">
              <FontAwesomeIcon
                icon={faPlusCircle}
                size="xl"
                className="hover:text-gray-200"
              />
            </div>
            <div
              className="tools size-8 text-center content-center pr-5"
              onClick={() => console.log(Reloadtry)}
            >
              <FontAwesomeIcon
                icon={faFilter}
                size="xl"
                className="hover:text-gray-200"
              />
            </div>
            <div className="tools  bg-gray-600 text-end content-center rounded-[25px] flex flex-row">
              <span className="h-8 w-5 content-center">
                <FontAwesomeIcon icon={faSearch} size="xs" />
              </span>
              <input
                type="text"
                className="username text-white h-8 w-26 outline-0 px-2"
                placeholder="search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <THETABLE inv_data={filteredInventory} setReloadtry={setReloadtry} />
      </div>
    </>
  );
}

export default INVENTROY;
