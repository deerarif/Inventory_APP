import axios from "axios";
import { data } from "react-router-dom";
const url = import.meta.env.VITE_URL;
function EDITDATA(props) {
  const Form_data = { ...props.DataInventory };
  const handleInput = (e, data_name) => {
    if (data_name) {
      Form_data[data_name] = e.target.value;
    }
  };
  async function send_data_update(data_form, id, reload, close_windows) {
    try {
      const res = await axios.post(url + "/API/inventory/" + id, data_form);
      if (res.status === 200) {
        alert("Data Has Been Updated");
        reload(Date.now());
        close_windows(false);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div
        id="edit_data"
        className="fixed flex inset-0 bg-black/90 max-sm:bg-black justify-center items-center z-50 cursor-default p-10 max-sm:p-0"
      >
        <div className="h-fit w-[70%] max-sm:h-auto max-sm:max-h-full max-sm:relative bg-gray-950 rounded-sm flex max-sm:overflow-y-auto items-center max-sm:flex-col max-sm:w-full gap-3">
          <div className="box1 text-white/90 flex font-bold w-full h-fit max-sm:flex-col">
            <form
              action=""
              className="flex flex-row max-sm:flex-col gap-5 w-full h-full items-center p-10"
            >
              <div className="flex flex-col gap-2 w-full">
                <span className="font-serif font-bold">Nama</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.Nama}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "Nama")}
                />
                <span className="font-serif font-bold">Deskripsi</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.Desc}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "Desc")}
                />
                <span className="font-serif font-bold">Serial Number</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.Searial_Num}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "Searial_Num")}
                />
                <span className="font-serif font-bold">Barcode</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.ID}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "ID")}
                />
                <span className="font-serif font-bold">Lokasi</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.Lokasi}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "Lokasi")}
                />
                <span className="font-serif font-bold">Processor</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.CPU}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "CPU")}
                />
                <span className="font-serif font-bold">RAM</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.RAM}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "RAM")}
                />
                <span className="font-serif font-bold">SSD</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.SSD}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "SSD")}
                />
                <span className="font-serif font-bold">Operating System</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.OS}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "OS")}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <span className="font-serif font-bold">HDD</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.HDD}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "HDD")}
                />
                <span className="font-serif font-bold">Motherboard</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.Mobo}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "Mobo")}
                />
                <span className="font-serif font-bold">IP Address</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.IP}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "IP")}
                />
                <span className="font-serif font-bold">Kaspersky</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.KIS}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "KIS")}
                />
                <span className="font-serif font-bold">User</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.User}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "User")}
                />
                <span className="font-serif font-bold">unit</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.Unit}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "Unit")}
                />
                <span className="font-serif font-bold">Tahun Pengadaan</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.Dates}
                  className="bg-gray-700/10 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "Dates")}
                  disabled
                />
                <span className="font-serif font-bold">Status</span>
                <select
                  id="Status"
                  class="block w-full bg-gray-700/50 px-2 font-light h-10 hover:bg-gray-700/60 focus:outline-0 text-heading text-sm rounded-sm focus:ring-brand shadow-xs placeholder:text-body"
                  onChange={(e) => handleInput(e, "Status")}
                >
                  <option selected>Pilih Status</option>
                  <option value="Aktif">Aktif</option>
                  <option value="Tidak Aktif">Tidak Aktif</option>
                  <option value="Perbaikan">Perbaikan</option>
                  <option value="Rusak">Rusak</option>
                  <option value="Musnah">Musnah</option>
                  <option value="Tidak Digunakan">Tidak Digunakan</option>
                </select>
                <span className="font-serif font-bold">Windows Key</span>
                <input
                  type="text"
                  placeholder={props.DataInventory.WIN_KEY}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "WIN_KEY")}
                />
              </div>
            </form>

            {/* Button column */}
            <div className="btn flex max-sm:w-auto flex-col max-sm:px-5 justify-between max-sm:justify-center mb-10 mt-10 mr-3 max-sm:gap-2 max-sm:m-0">
              <div
                className="h-10 mt-8 max-sm:mt-0 max-sm:m-0 px-3 border border-red-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-red-300 text-[1rem] flex items-center justify-center"
                onClick={() => props.setEditdata(false)}
              >
                CANCEL
              </div>
              <div
                className="h-10 px-3 border border-green-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-green-300 text-[1rem] flex items-center justify-center"
                onClick={() => {
                  delete Form_data.Dates;
                  delete Form_data.Docs;
                  delete Form_data.Soft;
                  delete Form_data.Note;
                  send_data_update(
                    Form_data,
                    props.id,
                    props.setReload,
                    props.setEditdata,
                  );
                  // console.log(Form_data);
                }}
              >
                SAVE
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EDITDATA;
