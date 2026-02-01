import EDITDATA from "./editdata";
import EDITSOFTWARE from "./edit_software";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import add_img from "../../assets/add-image-photo-icon.svg";
const url = import.meta.env.VITE_URL;
function DISPLAY(props) {
  const { id } = useParams();
  const [DataInventory, setDataInventory] = useState();
  const [Editdata, setEditdata] = useState();
  const [EditSoft, setEditSoft] = useState();
  const [Reload, setReload] = useState();
  const [Profile, setProfile] = useState();
  const navigate = useNavigate();
  async function handle_delete(label, soft_id) {
    try {
      const res = await axios.delete(
        url + "/API/software/" + label + "/" + soft_id,
      );
      const timestamp = Date.now();

      if (res.status === 200) {
        setReload(timestamp);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const handleFileChange = async (event) => {
    // Get the first file from the selection
    // setFile(event.target.files[0]);
    const formData = new FormData();
    formData.append("Documents", event.target.files[0]);
    try {
      const res = await axios.post(url + "/API/upload/" + id, formData);
      if (res.status === 200) {
        alert("success upload profile");
        setReload(Date.now());
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getProfile = async (ids) => {
    try {
      const res = await axios.get(url + "/docs/" + ids + "/profile.jpg");
      if (res.status === 200) {
        setProfile(url + "/docs/" + ids + "/profile.jpg");
      }
    } catch (err) {
      console.log("profile is None");
    }
  };
  useEffect(() => {
    const fetchdata = async (ids) => {
      try {
        const res = await axios.get(url + "/API/inventory/" + ids);
        if (res.status === 200) {
          setDataInventory(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProfile(id);
    fetchdata(id);
  }, [Reload]);
  return (
    <>
      {/* <EDITSOFTWARE /> */}
      {/* <div className="absolute max-sm:relative inset-0 text-[0.8rem] text-neutral-50 font-mono font-medium max-sm:flex-col left-15 right-5 flex justify-center max-sm:overflow-hidden"> */}
      <div className="absolute max-sm:relative inset-0 max-sm:pb-10 h-[100%] max-sm:flex-col text-[0.8rem] bg-gray-900/10 text-neutral-50 font-mono font-medium ml-13 items-center justify-center flex flex-row gap-10">
        <div className="rounded-[5px] bg-gray-950/30 min-w-430 max-sm:min-w-0 max-sm:w-full absolute max-sm:relative top-5 flex flex-row max-sm:flex-col p-10 gap-10">
          <label
            className="media w-[30%] bg-gray-700/50 h-80 rounded-sm p-10 hover:opacity-60 cursor-pointer max-sm:w-[100%]"
            onChange={handleFileChange}
          >
            {Profile ? (
              <>
                <a href={Profile} target="_blank">
                  <img
                    src={Profile}
                    className="h-[100%] w-[100%] object-cover hover:object-contain"
                  />
                </a>
              </>
            ) : (
              <>
                <img src={add_img} /> <input type="file" className="hidden" />
              </>
            )}
            {/* <img src={Profile} /> */}
            {/* <input type="file" className="hidden" /> */}
          </label>
          <div className="w-full rounded-sm flex flex-col max-sm:mt-10">
            <span className=" text-white font-extrabold text-2xl">
              {DataInventory ? DataInventory.Nama : ""}
            </span>
            <span className=" font-medium text-gray-400 w-200 max-sm:w-auto text-justify border-y-3 border-amber-50/1">
              {DataInventory ? DataInventory.Desc : ""}
            </span>
            <div className="tabel">
              <table className=" font-light w-auto border-separate border-spacing-1 ">
                <tr className="font-sans font-semibold text-[1.2rem]">
                  Informasi Detail
                </tr>
                <tr>
                  <td className="font-semibold">Seri</td>
                  <td>{DataInventory ? ": " + DataInventory.Nama : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Nomer Seri</td>
                  <td>
                    {DataInventory ? ": " + DataInventory.Searial_Num : ""}
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold">No. Barcode</td>
                  <td>{": " + id}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Category</td>
                  <td>{DataInventory ? ": " + DataInventory.Category : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Lokasi</td>
                  <td>{DataInventory ? ": " + DataInventory.Lokasi : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Operating System</td>
                  <td>{DataInventory ? ": " + DataInventory.OS : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Windows Key</td>
                  <td>{DataInventory ? ": " + DataInventory.WIN_KEY : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Processor</td>
                  <td>{DataInventory ? ": " + DataInventory.CPU : ""}</td>
                </tr>

                <tr>
                  <td className="font-semibold">RAM</td>
                  <td>{DataInventory ? ": " + DataInventory.RAM : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">SSD</td>
                  <td>{DataInventory ? ": " + DataInventory.SSD : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">HDD</td>
                  <td>{DataInventory ? ": " + DataInventory.HDD : "-"}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Motherboard</td>
                  <td>{DataInventory ? ": " + DataInventory.Mobo : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">IP Address</td>
                  <td>{DataInventory ? ": " + DataInventory.IP : ""}</td>
                </tr>

                <tr>
                  <td className="font-semibold">KIS Code</td>
                  <td>{DataInventory ? ": " + DataInventory.KIS : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">User</td>
                  <td>{DataInventory ? ": " + DataInventory.User : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Unit</td>
                  <td>{DataInventory ? ": " + DataInventory.Unit : ""}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Tahun Pengadaan</td>
                  <td>{DataInventory ? ": " + DataInventory.Dates : ""}</td>
                </tr>
                {/* <tr>
                  <td className="font-semibold">Last Maintenance</td>
                  <td>{DataInventory ? ": " + DataInventory.Note : "None"}</td>
                </tr> */}

                <tr>
                  <td className="font-semibold">Status</td>
                  <td>{DataInventory ? ": " + DataInventory.Status : ""}</td>
                </tr>
                {/* <tr>
                  This Part is for note i probaly dont needed cuz i have 
                  <td className="font-semibold">Note</td>
                  <td>
                    : Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, magnam enim minus ullam reprehenderit voluptatibus
                    nulla obcaecati sequi aperiam modi ipsa, mollitia harum cum
                    veritatis est, laboriosam illum temporibus hic.
                  </td>
                </tr> */}
              </table>
            </div>
            <div className="softwaretable text-sm pt-5">
              <span className=" font-bold text-[1.2rem]">Software</span>
              <table className="font-light pt-10 w-full border-amber-50 border-1">
                {DataInventory
                  ? DataInventory.Soft.map((data, index) => (
                      <tr key={data[0]}>
                        <td className="font-light h-8 w-[3%] px-2 border-amber-50 border-1 text-center justify-center">
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
                        <td
                          className="h-8 pt-2 border-amber-50 border-1 content-center justify-center flex"
                          onClick={() => handle_delete(id, data[0])}
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            size="sm"
                            className="hover:text-gray-200 text-red-400"
                          />
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
                            href={`${url}  + "/docs/${id}/${data[2]}`}
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
            <div className="controllbtn flex flex-row max-sm:flex-col max-sm:gap-2 w-full justify-between pt-10 cursor-default">
              <div className="editbtn flex flex-row max-sm:flex-col gap-3">
                <div
                  className="h-10 w-auto px-3 border-1 border-green-300 rounded-sm bg-gray-900/84  hover:bg-gray-900/10 active:bg-gray-500 font-extralight text-green-300 hover:text-green-300/80 text-[1rem] flex items-center justify-center"
                  onClick={() => setEditdata(true)}
                >
                  Edit Data
                </div>
                <div
                  className="h-10 w-auto px-3 border-1 border-green-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/10 active:bg-gray-500 font-extralight text-green-300 hover:text-green-300/80 text-[1rem] flex items-center justify-center"
                  onClick={() => setEditSoft(true)}
                >
                  Add Software
                </div>
              </div>
              <div className="exitbtn " onClick={() => navigate("/")}>
                <div className="max-sm:w-auto h-10 w-auto px-3 border-1 border-red-300  rounded-sm bg-gray-900/84 hover:bg-gray-900/10 active:bg-gray-500 font-extralight text-red-300 text-[1rem] flex items-center justify-center">
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
