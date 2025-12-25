import axios from "axios";
import { data } from "react-router-dom";
function EDITDATA(props) {
  const Form_data = { ...props.DataInventory };
  const handleInput = (e, data_name) => {
    if (data_name) {
      Form_data[data_name] = e.target.value;
    }
  };
  async function send_data_update(data_form, id, reload, close_windows) {
    try {
      const res = await axios.post(
        "http://localhost:8990/API/inventory/" + id,
        data_form
      );
      if (res.status === 200) {
        alert("Data Has Been Updated");
        reload(true);
        close_windows(false);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div
        id="Test1"
        className="fixed flex inset-0 bg-black/90 justify-center  items-center z-50 cursor-default p-10"
      >
        <div className="h-fit w-[70%] bg-gray-950 rounded-sm flex items-center gap-3">
          <div className="box1 text-white/90 flex font-bold w-full h-fit">
            <form
              action=""
              className="flex flex-row gap-5 w-full h-full items-center p-10"
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
                {/* <span className="font-serif font-bold">HDD</span>
                <input
                  type="text"
                  placeholder=""
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                /> */}
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
                <input
                  type="text"
                  placeholder={props.DataInventory.Status}
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                  onChange={(e) => handleInput(e, "Status")}
                />
                {/* <span className="font-serif font-bold">Judul</span>
                <input
                  type="text"
                  placeholder="text1"
                  className="bg-gray-700/50 px-2 font-light h-10 rounded-sm"
                /> */}
              </div>
            </form>

            {/* Button column */}
            <div className="btn flex flex-col justify-between mb-10 mt-10 mr-3">
              <div
                className="h-10 mt-8 px-3 border border-red-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-red-300 text-[1rem] flex items-center justify-center"
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
                    props.setEditdata
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
