function ADDNEWDEVICE() {
  return (
    <>
      <div className="absolute inset-0 text-[0.8rem] text-neutral-50 font-mono font-medium left-15 right-5 flex justify-center">
        <div className=" rounded-[5px] min-w-430 h-full absolute flex flex-row p-10 gap-10 items-center">
          <div className="media w-[20%] bg-gray-700/50 h-70 rounded-sm p-10 flex items-center hover:bg-gray-600">
            <img src="" alt="" />
          </div>
          <div className="h-[70%] w-full bg-gray-950 rounded-sm flex items-center">
            <div className="box1 text-white/90 flex font-bold w-full h-fit">
              <form
                action=""
                className="flex flex-row gap-10 w-full h-full items-center p-10"
              >
                <div className="flex flex-col gap-5 w-full">
                  <input
                    type="text"
                    placeholder="Nama Perangkat"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="Description"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="Barcode"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="Lokasi"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="IP Address"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="Tahun Pengadaan"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="Processor"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="SSD"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="HDD"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />
                </div>
                <div className="flex flex-col gap-5 w-full">
                  <input
                    type="text"
                    placeholder="User"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="Status"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="Maintenance Date"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="KIS Code"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="Warna"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="Rekanan Pembelian"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="Windows Code"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="Serial Number"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />

                  <input
                    type="text"
                    placeholder="Motherboard"
                    className="bg-gray-700/50 px-2 font-light h-10 rounded-sm hover:bg-gray-600 focus:outline-0"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-30 w-full bottom-0 px-30 items-center flex flex-row justify-between">
        <div className="h-10 w-auto px-3 border-1 border-red-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-red-300 text-[1rem] flex items-center justify-center">
          BACK
        </div>
        <div className="h-10 w-auto px-3 border-1 border-green-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-green-300 text-[1rem] flex items-center justify-center">
          POST
        </div>
      </div>
    </>
  );
}

export default ADDNEWDEVICE;
