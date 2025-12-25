import React, { useState, useEffect } from "react";
import ADDNEWDOCS from "./newdocs";
import { useNavigate } from "react-router-dom";
import {
  faAngleDown,
  faSort,
  faFileDownload,
  faFileCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "react-router-dom";
function THETABLE(props) {
  const [openRow, setOpenRow] = useState(null);
  const [Documtsaddnew, setDocumtsaddnew] = useState("");
  const [AddnewdocState, setAddnewdocState] = useState();
  const [DocsDataID, setDocsDataID] = useState();
  const navigate = useNavigate();

  function StatusColor(data_status) {
    const data_color = {
      Active: "bg-green-500",
      Tidak_Aktif: "bg-pink-400",
      Perbaikan: "bg-blue-400",
      Rusak: "bg-red-400",
      Musnah: "bg-gray-400",
      Tidak_digunakan: "bg-orange-300",
    };
    if (data_status) {
      return data_color[data_status];
    }
  }
  function formatDateToDDMMYYYY(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${day}-${month}-${year}`;
  }
  return (
    <div className="absolute inset-0 text-[0.8rem] text-neutral-50 font-mono font-medium top-17 p-2 overflow-visible">
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
        {props.inv_data
          ? props.inv_data.map((data) => (
              <React.Fragment key={data.ID}>
                <tr className="h-9 border-y-1 border-amber-50 hover:bg-gray-950">
                  <td></td>
                  <td onClick={() => navigate("/detail/" + data.ID)}>
                    {data.ID}
                  </td>
                  <td>{data.Lokasi}</td>
                  <td>{data.Unit}</td>
                  <td>{data.User}</td>
                  <td
                    onClick={() => {
                      // console.log("click");
                      props.setReloadtry(true);
                    }}
                  >
                    {data.IP}
                  </td>
                  <td>
                    <div
                      className={`category h-5 w-fit px-1 text-center content-center rounded-2xl ${StatusColor(
                        data.Status
                      )}`}
                    >
                      <span>{data.Status}</span>
                    </div>
                  </td>
                  <td>{data.Nama}</td>
                  <td>{data.Desc}</td>
                  <td>
                    <div className="flex basis-100">
                      <span
                        className="basis-50 pl-5"
                        onClick={() =>
                          setOpenRow(openRow === data.ID ? null : data.ID)
                        }
                      >
                        <FontAwesomeIcon icon={faAngleDown} />
                      </span>
                      <span
                        className="basis-50"
                        onClick={() => {
                          setDocsDataID(data.ID);
                          setAddnewdocState(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faFileCirclePlus} />
                      </span>
                    </div>
                  </td>
                  <td>{formatDateToDDMMYYYY(data.Dates)}</td>
                </tr>

                <tbody
                  key={`docs-${data.ID}`}
                  className={openRow === data.ID ? "text-gray-500" : "hidden"}
                >
                  {data.Docs.map((docs, index) => (
                    <tr
                      key={`${data.ID}-${index}`}
                      className="bg-gray-800 hover:bg-gray-900 font-light italic h-8"
                    >
                      <td className="pl-15" colSpan={2}>
                        {index + 1}
                      </td>
                      <td colSpan={3}>{docs[1]}</td>
                      <td colSpan={4}>
                        <a
                          href={
                            "http://localhost:8990/docs/" +
                            data.ID +
                            "/" +
                            docs[2]
                          }
                          className="hover:text-blue-500"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {docs[2]}
                        </a>
                      </td>
                      <td colSpan={1}>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </td>
                      <td colSpan={1}>{docs[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </React.Fragment>
            ))
          : null}
      </table>
      {AddnewdocState ? (
        <ADDNEWDOCS
          state={setAddnewdocState}
          setReloadtry={(meh) => props.setReloadtry(meh)}
          dataID={DocsDataID}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default THETABLE;
