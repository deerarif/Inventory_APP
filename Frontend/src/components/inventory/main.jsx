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
const url = import.meta.env.VITE_URL;
function INVENTROY() {
  const [Reloadtry, setReloadtry] = useState();
  const [Inventory_data, setInventory_data] = useState();
  const [Search, setSearch] = useState("");
  const [DataHeader, setDataHeader] = useState();
  const [FilterState, setFilterState] = useState();
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
        String(value).toLowerCase().includes(keyword),
      ),
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
  const debouncedOnChange = (val) => {
    setTimeout(() => setSearch(val), 1000);
  };
  async function fetchdata() {
    await axios
      .get(url + "/API/inventory/")
      .then((res) => {
        // setInventory_data(res.data);
        localStorage.setItem("Assets_data", JSON.stringify(res.data));
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
        setReloadtry("Again");
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
    const items = JSON.parse(localStorage.getItem("Assets_data"));

    if (items) {
      setInventory_data(items);
      loadData();
    } else {
      const timeoutId = setTimeout(() => {
        const newItems = JSON.parse(localStorage.getItem("Assets_data"));
        if (!newItems) {
          // alert("Something went wrong. Unable to load data.");
        }
      }, 5000);

      loadData().then(() => {
        const newItems = JSON.parse(localStorage.getItem("Assets_data"));
        if (newItems) {
          setInventory_data(newItems);
          clearTimeout(timeoutId);
        }
      });

      return () => clearTimeout(timeoutId);
    }
  }, [Reloadtry]);
  return (
    <>
      <div className="absolute inset-0 text-[0.8rem] text-neutral-50 font-mono font-medium ml-13">
        <div className="navbar h-15 w-auto content-center">
          <div className="flex flex-row items-center top-5 gap-x-2 absolute left-3 cursor-default">
            <div
              className=" category h-8 w-25 text-center content-center rounded-2xl bg-green-500 hover:bg-green-700"
              data-value="Aktif"
              onClick={(e) => ClickShit(e.currentTarget.dataset.value)}
            >
              <span>Aktif {DataHeader ? DataHeader.Aktif : "0"}</span>
            </div>
            <div
              className="tools h-8 w-30 bg-pink-400 hover:bg-pink-700 text-center content-center rounded-[25px]"
              data-value="Tidak Aktif"
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
              data-value="Tidak Digunakan"
              onClick={(e) => ClickShit(e.currentTarget.dataset.value)}
            >
              <span>
                Tidak Digunakan {DataHeader ? DataHeader.Tidak_digunakan : "0"}
              </span>
            </div>
          </div>
          <div className="flex flex-row max-sm:relative max-sm:w-auto max-sm:justify-start max-sm:top-10 max-sm:mt-10  max-sm:right-0 items-center top-5 absolute right-5 gap-x-1">
            {/* <div className="tools size-8 text-center content-center">
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
                onClick={() => {
                  const items = JSON.parse(localStorage.getItem("Assets_data"));
                  if (items) {
                    console.log(items);
                  }
                }}
              />
            </div> */}
            <div
              className="tools size-8 text-center content-center pr-5 max-sm:hidden"
              // onClick={() => console.log(Reloadtry)}
            >
              <FontAwesomeIcon
                icon={faFilter}
                size="xl"
                className="hover:text-gray-500 "
                onClick={() =>
                  FilterState ? setFilterState(false) : setFilterState(true)
                }
              />
            </div>
            <div className="tools  bg-gray-600 text-end content-center rounded-[25px] flex flex-row justify-evenly ">
              <span className="h-8 w-5 content-center">
                <FontAwesomeIcon icon={faSearch} size="xs" />
              </span>
              <input
                type="text"
                id="Searchbox"
                className="username text-white h-8 w-28 outline-0 pl-3 cursor-default"
                placeholder="search"
                onChange={(e) => debouncedOnChange(e.target.value)}
              />
              <span
                className={
                  Search
                    ? "h-8 pr-5 content-center text-amber-50/50 hover:text-amber-50 cursor-default"
                    : "hidden"
                }
                onClick={() => {
                  setSearch(null);
                  document.getElementById("Searchbox").value = "";
                }}
              >
                x
              </span>
            </div>
          </div>
        </div>
        <THETABLE
          inv_data={filteredInventory}
          filterbtn={[FilterState, setFilterState]}
          setReloadtry={setReloadtry}
        />
      </div>
    </>
  );
}

export default INVENTROY;
