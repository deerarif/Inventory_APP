import EDITDATA from "./editdata";
import EDITSOFTWARE from "./edit_software";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function DISPLAY(props) {
  const { id } = useParams();
  const [DataInventory, setDataInventory] = useState();
  const [Editdata, setEditdata] = useState();
  const [EditSoft, setEditSoft] = useState();
  const [Reload, setReload] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async (ids) => {
      try {
        const res = await axios.get(
          "http://localhost:8990/API/inventory/" + ids
        );
        if (res.status === 200) {
          setDataInventory(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata(id);
  }, [Reload]);
  return (
    <>
      {/* <EDITSOFTWARE /> */}
      <div className="absolute inset-0 text-[0.8rem] text-neutral-50 font-mono font-medium left-15 right-5 flex justify-center">
        <div className=" rounded-[5px] bg-gray-950/30 min-w-430 absolute top-5 flex flex-row p-10 gap-10">
          <div className="media w-[30%] bg-gray-700/50 h-80 rounded-sm p-10">
            <img
              src="https://static.loombard.pl/library/2022/10/8/12/md_VPixX5SkrONB5JHtdC6A4izsdugQimwRWdEXh6nZ.webp"
              alt=""
            />
          </div>
          <div className="w-full rounded-sm flex flex-col">
            <span className=" text-white font-extrabold text-2xl">
              {DataInventory ? DataInventory.Nama : ""}
            </span>
            <span className=" font-medium text-gray-400 w-200 text-justify border-y-3 border-amber-50/1">
              {DataInventory ? DataInventory.Desc : ""}
            </span>
            <div className="tabel">
              <table className=" font-light w-[50%] border-separate border-spacing-1">
                <tr className="font-sans font-semibold text-[1.2rem]">
                  Informasi Detail
                </tr>
                <tr>
                  <td className="font-semibold">Seri</td>
                  <td>{DataInventory ? DataInventory.Nama : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">No. Barcode</td>
                  <td>{id}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Lokasi</td>
                  <td>{DataInventory ? DataInventory.Lokasi : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Processor</td>
                  <td>{DataInventory ? DataInventory.CPU : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">RAM</td>
                  <td>{DataInventory ? DataInventory.RAM : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">SSD</td>
                  <td>{DataInventory ? DataInventory.SSD : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">HDD</td>
                  <td>{DataInventory ? DataInventory.HDD : "-"}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Motherboard</td>
                  <td>{DataInventory ? DataInventory.Mobo : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">IP Address</td>
                  <td>{DataInventory ? DataInventory.IP : ""}</td>
                </tr>

                <tr>
                  <td className="font-semibold">KIS Code</td>
                  <td>{DataInventory ? DataInventory.KIS : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">User</td>
                  <td>{DataInventory ? DataInventory.User : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Unit</td>
                  <td>{DataInventory ? DataInventory.Unit : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Tahun Pengadaan</td>
                  <td>{DataInventory ? DataInventory.Dates : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Last Maintenance</td>
                  <td>{DataInventory ? DataInventory.Note : "None"}</td>
                </tr>

                <tr>
                  <td className="font-semibold">Status</td>
                  <td>{DataInventory ? DataInventory.Status : ""}</td>
                </tr>
              </table>
            </div>
            <div className="softwaretable text-sm pt-5">
              <span className=" font-bold text-[1.2rem]">Software</span>
              <table className="font-light pt-10 w-full border-amber-50 border-1">
                {DataInventory
                  ? DataInventory.Soft.map((data, index) => (
                      <tr key={data[0]}>
                        <td className="font-light h-8 px-2 border-amber-50 border-1 text-left justify-center">
                          {index + 1}
                        </td>
                        <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                          {data[1]}
                        </td>
                        <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                          {data[2]}
                        </td>
                        <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                          {data[3]}
                        </td>
                      </tr>
                    ))
                  : ""}
              </table>
            </div>
            <div className="Berkas text-sm pt-5">
              <span className=" font-bold text-[1.2rem]">Lampiran Berkas</span>
              <table className="font-light pt-10 w-full border-amber-50 border-1">
                {DataInventory
                  ? DataInventory.Docs.map((data, index) => (
                      <tr key={data[0]}>
                        <td className="font-light h-8 px-2 border-amber-50 border-1 text-center justify-center">
                          {index + 1}
                        </td>
                        <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                          {data[1]}
                        </td>
                        <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                          <a
                            href={`http://localhost:8990/docs/${id}/${data[2]}`}
                            target="_blank"
                          >
                            {data[2]}
                          </a>
                        </td>
                        <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                          {data[3]}
                        </td>
                      </tr>
                    ))
                  : ""}
              </table>
            </div>
            <div className="controllbtn flex flex-row w-full justify-between pt-10 cursor-default">
              <div className="editbtn flex flex-row gap-3">
                <div
                  className="h-10 w-auto px-3 border-1 border-green-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-green-300 text-[1rem] flex items-center justify-center"
                  onClick={() => setEditdata(true)}
                >
                  Edit Data
                </div>
                <div
                  className="h-10 w-auto px-3 border-1 border-green-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-green-300 text-[1rem] flex items-center justify-center"
                  onClick={() => setEditSoft(true)}
                >
                  Edit Software
                </div>
              </div>
              <div className="exitbtn " onClick={() => navigate("/")}>
                <div className="h-10 w-auto px-3 border-1 border-red-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-red-300 text-[1rem] flex items-center justify-center">
                  Exit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Editdata ? (
        <EDITDATA
          DataInventory={DataInventory}
          id={id}
          setEditdata={setEditdata}
          setReload={setReload}
        />
      ) : (
        ""
      )}
      {EditSoft ? (
        <EDITSOFTWARE setEditSoft={setEditSoft} setReload={setReload} id={id} />
      ) : (
        ""
      )}
    </>
  );
}

export default DISPLAY;
