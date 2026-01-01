import axios from "axios";
import { useNavigate } from "react-router-dom";
function ADDNEWDEVICE() {
  const navigate = useNavigate();
  async function add_inventory(data_form) {
    try {
      const res = await axios.post(
        "http://localhost:8990/API/inventory/",
        data_form
      );
      if (res.status === 200) {
        alert("Add New Data Success");
        navigate("/detail/" + data_form.ID);
      }
    } catch (err) {
      console.log(err);
    }
  }
  function formatDate(dateStr) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  }
  const Form_data = {
    Nama: "",
    Desc: "",
    Profile: "",
    ID: "",
    Searial_Num: "",
    Lokasi: "",
    Category: "",
    CPU: "",
    OS: "",
    WIN_KEY: "",
    RAM: "",
    SSD: "",
    HDD: "",
    Mobo: "",
    IP: "",
    KIS: "",
    User: "",
    Unit: "",
    Status: "",
    Dates: "",
  };
  const handleInput = (e, data_name) => {
    if (data_name) {
      Form_data[data_name] = e.target.value;
    }
  };

  return (
    <>
      <div className="absolute inset-0 text-[0.8rem] text-neutral-50 font-mono font-medium left-15 right-5 flex justify-center">
        <div className=" rounded-[5px] min-w-430 h-full absolute flex flex-row p-10 gap-10 items-center">
          <div className="h-[70%] w-full rounded-sm flex items-center">
            <div className="box1 text-white/90 flex font-bold w-full h-fit bg-gray-700/50">
              <form
                action=""
                className="flex flex-row gap-10 w-full h-full items-center p-10"
              >
                <div className="flex flex-col gap-5 w-full">
                  <input
                    type="text"
                    placeholder="Nama Perangkat"
                    autoFocus
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "Nama")}
                  />

                  <input
                    type="text"
                    placeholder="Description"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "Desc")}
                  />

                  <input
                    type="text"
                    placeholder="Barcode"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "ID")}
                  />

                  <input
                    type="text"
                    placeholder="Lokasi"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "Lokasi")}
                  />

                  <input
                    type="text"
                    placeholder="IP Address"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "IP")}
                  />

                  <input
                    type="date"
                    placeholder="Tahun Pengadaan"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "Dates")}
                  />

                  <input
                    type="text"
                    placeholder="Processor"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "CPU")}
                  />

                  <input
                    type="text"
                    placeholder="Operating System"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "OS")}
                  />
                  <input
                    type="text"
                    placeholder="Windows Code"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "OS_KEY")}
                  />
                </div>
                <div className="flex flex-col gap-5 w-full">
                  <input
                    type="text"
                    placeholder="User"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "User")}
                  />
                  <input
                    type="text"
                    placeholder="HDD"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "HDD")}
                  />
                  <input
                    type="text"
                    placeholder="SSD"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "SSD")}
                  />

                  <select
                    id="Status"
                    class="block w-full bg-gray-700/50 px-2 font-light h-10 hover:bg-gray-700/60 focus:outline-0 text-heading text-sm rounded-sm focus:ring-brand shadow-xs placeholder:text-body"
                    onChange={(e) => handleInput(e, "Status")}
                  >
                    <option selected>Status</option>
                    <option value="Aktif">Aktif</option>
                    <option value="Tidak_Aktif">Tidak_Aktif</option>
                    <option value="Perbaikan">Perbaikan</option>
                    <option value="Rusak">Rusak</option>
                    <option value="Rusak">Musnah</option>
                    <option value="Rusak">Tidak_digunakan</option>
                  </select>

                  <select
                    id="category"
                    class="block w-full bg-gray-700/50 px-2 font-light h-10 hover:bg-gray-700/60 focus:outline-0 text-heading text-sm rounded-sm focus:ring-brand shadow-xs placeholder:text-body"
                    onChange={(e) => handleInput(e, "Category")}
                  >
                    <option selected>Category</option>
                    <option value="Komputer All In One">
                      Komputer All In One
                    </option>
                    <option value="Komputer Desktop">Komputer Desktop</option>
                    <option value="Printer">Printer</option>
                    <option value="Printer">Scanner</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Monitor">Monitor</option>
                    <option value="UPS">UPS</option>
                    <option value="Projector">Projector</option>
                    <option value="Smartphone">Smartphone</option>
                  </select>
                  <input
                    type="text"
                    placeholder="KIS Code"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "KIS")}
                  />

                  <input
                    type="text"
                    placeholder="Serial Number"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "Searial_Num")}
                  />

                  <input
                    type="text"
                    placeholder="Motherboard"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                    onChange={(e) => handleInput(e, "Mobo")}
                  />
                  <div className="flex flex-row justify-between cursor-default">
                    <div
                      className="h-10 w-auto px-3 border-1 border-red-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-red-300 text-[1rem] flex items-center justify-center"
                      onClick={() => navigate("/")}
                    >
                      BACK
                    </div>
                    <div
                      className="h-10 w-auto px-3 border-1 border-green-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-green-300 text-[1rem] flex items-center justify-center"
                      onClick={() => {
                        if (
                          !Form_data.Nama ||
                          !Form_data.ID ||
                          !Form_data.Status ||
                          !Form_data.Dates
                        ) {
                          alert("Data tidak lengkap silahkan lengkapi data");
                          return;
                        }
                        Form_data.Dates = formatDate(Form_data.Dates);
                        add_inventory(Form_data);
                      }}
                    >
                      SUBMIT
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ADDNEWDEVICE;
