import React, { useState } from "react";
import ADDNEWDOCS from "./newdocs";
import {
  faAngleDown,
  faSort,
  faFileDownload,
  faFileCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function THETABLE() {
  const [DocumtstablesState, setDocumtstablesState] = useState("");
  const [Documtsaddnew, setDocumtsaddnew] = useState("");
  return (
    <div className="absolute inset-0 text-[0.8rem] text-neutral-50 font-mono font-medium top-20 left-15 right-5 overflow-visible">
      <div className={Documtsaddnew ? "" : "hidden"}>
        <ADDNEWDOCS nowstate={Documtsaddnew} onupdate={setDocumtsaddnew} />
      </div>
      <table className="left-15 w-full cursor-default">
        <tr className=" text-left font-bold text-[1rem] border-y-2 border-amber-50 h-10">
          <th className="w-5"></th>
          <th className=" hover:bg-gray-950">
            <FontAwesomeIcon
              icon={faSort}
              className="hover:text-gray-200 text-[0.7rem] pr-3"
            />
            Label
          </th>
          <th className=" hover:bg-gray-950">
            <FontAwesomeIcon
              icon={faSort}
              className="hover:text-gray-200 text-[0.7rem] pr-3"
            />
            Lokasi
          </th>
          <th className=" hover:bg-gray-950">
            <FontAwesomeIcon
              icon={faSort}
              className="hover:text-gray-200 text-[0.7rem] pr-3"
            />
            Unit
          </th>
          <th className=" hover:bg-gray-950">
            <FontAwesomeIcon
              icon={faSort}
              className="hover:text-gray-200 text-[0.7rem] pr-3"
            />
            Pengguna
          </th>
          <th className=" hover:bg-gray-950">
            <FontAwesomeIcon
              icon={faSort}
              className="hover:text-gray-200 text-[0.7rem] pr-3"
            />
            IP Address
          </th>
          <th className=" hover:bg-gray-950">
            <FontAwesomeIcon
              icon={faSort}
              className="hover:text-gray-200 text-[0.7rem] pr-3"
            />
            Status
          </th>
          <th className=" hover:bg-gray-950">
            <FontAwesomeIcon
              icon={faSort}
              className="hover:text-gray-200 text-[0.7rem] pr-3"
            />
            Merk
          </th>
          <th className=" hover:bg-gray-950">
            <FontAwesomeIcon
              icon={faSort}
              className="hover:text-gray-200 text-[0.7rem] pr-3"
            />
            Category
          </th>
          <th className=" hover:bg-gray-950">
            <FontAwesomeIcon
              icon={faSort}
              className="hover:text-gray-200 text-[0.7rem] pr-3"
            />
            Documents
          </th>
          <th className=" hover:bg-gray-950">
            <FontAwesomeIcon
              icon={faSort}
              className="hover:text-gray-200 text-[0.7rem] pr-3"
            />
            Tahun Pengadaan
          </th>
        </tr>
        <tr className="h-9 border-y-1 border-amber-50 hover:bg-gray-950">
          <td></td>
          <td>987139</td>
          <td>Lantai 1 Gudang Farmasi</td>
          <td>Farmasi</td>
          <td>John Doe</td>
          <td>192.168.1.20</td>
          <td>
            {" "}
            <div className=" category h-5 w-15 text-center content-center rounded-2xl bg-green-500 hover:bg-green-700">
              <span>Aktif</span>
            </div>
          </td>
          <td>Lenovo Idepad 15</td>
          <td>Laptop Gaming</td>
          <td className="">
            <div className="flex basis-100">
              <span
                className="basis-50"
                onClick={() => {
                  DocumtstablesState == ""
                    ? setDocumtstablesState("hidden")
                    : setDocumtstablesState("");
                }}
              >
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="hover:text-gray-200"
                />
              </span>
              <span
                className="basis-50"
                onClick={() => {
                  DocumtstablesState == ""
                    ? setDocumtsaddnew("hidden")
                    : setDocumtsaddnew("");
                }}
              >
                <FontAwesomeIcon
                  icon={faFileCirclePlus}
                  className="hover:text-gray-200"
                />
              </span>
            </div>
          </td>
          <td>20 January 2024</td>
        </tr>
        <tbody className={DocumtstablesState ? " text-gray-500" : "hidden"}>
          {Array.from({ length: 4 }, (_, i) => (
            <tr className="bg-gray-800 hover:bg-gray-900 font-light italic h-8">
              <td className="pl-15" colSpan={2}>
                {i + 1}
              </td>
              <td colSpan={3}>Serah terima</td>
              <td colSpan={4}>
                <a
                  href="https://www.soundczech.cz/temp/lorem-ipsum.pdf"
                  className=" hover:text-blue-500"
                  target="_blank"
                >
                  https://www.soundczech.cz/temp/lorem-ipsum.pdf
                </a>
              </td>
              <td colSpan={1}>
                <FontAwesomeIcon
                  icon={faFileDownload}
                  className="hover:text-gray-200 text-sm"
                />
              </td>
              <td colSpan={1}>31 January 2024</td>
            </tr>
          ))}
        </tbody>
        {Array.from({ length: 30 }, (_, i) => (
          <tr
            className="h-9 border-y-1 border-amber-50 hover:bg-gray-950"
            key={i + 1}
          >
            <td></td>
            <td>{(987139 + i) * 7 - 5}</td>
            <td>Lantai 1 Gudang Farmasi</td>
            <td>Farmasi</td>
            <td>John Doe</td>
            <td>192.168.1.{i + 1}</td>
            <td>
              {" "}
              <div className=" category h-5 w-15 text-center content-center rounded-2xl bg-green-500 hover:bg-green-700">
                <span>Aktif</span>
              </div>
            </td>
            <td>Lenovo Idepad 15</td>
            <td>Laptop Gaming</td>
            <td className="">
              <div className="flex basis-100">
                <span className="basis-50">
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="hover:text-gray-200"
                  />
                </span>
                <span className="basis-50">
                  <FontAwesomeIcon
                    icon={faFileCirclePlus}
                    className="hover:text-gray-200"
                  />
                </span>
              </div>
            </td>
            <td>20 January 2024</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default THETABLE;
