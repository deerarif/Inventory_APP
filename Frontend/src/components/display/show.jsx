import EDITDATA from "./editdata";
import EDITSOFTWARE from "./edit_software";
function DISPLAY(props) {
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
              Lenovo Thinkpad T40
            </span>
            <span className=" font-medium text-gray-400 w-200 text-justify border-y-3 border-amber-50/1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              illum molestiae laboriosam cumque aliquam tempore, inventore nam
              provident enim vero quas, dignissimos ratione corrupti. Temporibus
              nobis similique enim esse accusantium.
            </span>
            <div className="tabel">
              <table className=" font-light w-[50%] border-separate border-spacing-1">
                <tr className="font-sans font-semibold text-[1.2rem]">
                  Informasi Detail
                </tr>
                <tr>
                  <td className="font-semibold">Seri</td>
                  <td>90821HKJASD23</td>
                </tr>
                <tr>
                  <td className="font-semibold">No. Barcode</td>
                  <td>219383</td>
                </tr>
                <tr>
                  <td className="font-semibold">Lokasi</td>
                  <td>Lantai 4 Nurse Station RPU</td>
                </tr>
                <tr>
                  <td className="font-semibold">Processor</td>
                  <td>Intel Core i7 3770X</td>
                </tr>
                <tr>
                  <td className="font-semibold">RAM</td>
                  <td>16GB DDR4</td>
                </tr>
                <tr>
                  <td className="font-semibold">SSD</td>
                  <td>500GB</td>
                </tr>
                <tr>
                  <td className="font-semibold">HDD</td>
                  <td>NONE</td>
                </tr>
                <tr>
                  <td className="font-semibold">Motherboard</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td className="font-semibold">IP Address</td>
                  <td>192.168.1.190</td>
                </tr>

                <tr>
                  <td className="font-semibold">KIS Code</td>
                  <td>KJHAFS9124JKE82F</td>
                </tr>
                <tr>
                  <td className="font-semibold">User</td>
                  <td>Santo Curious</td>
                </tr>
                <tr>
                  <td className="font-semibold">Unit</td>
                  <td>Keperawatan</td>
                </tr>
                <tr>
                  <td className="font-semibold">Tahun Pengadaan</td>
                  <td>25 Juni 2029</td>
                </tr>
                <tr>
                  <td className="font-semibold">Last Maintenance</td>
                  <td>28 Juni 2018</td>
                </tr>

                <tr>
                  <td className="font-semibold">Status</td>
                  <td>Aktif</td>
                </tr>
              </table>
            </div>
            <div className="softwaretable text-sm pt-5">
              <span className=" font-bold text-[1.2rem]">Software</span>
              <table className="font-light pt-10 w-full border-amber-50 border-1">
                <tr>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 text-center justify-center">
                    1
                  </td>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                    Windows 11
                  </td>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                    Miharob1000@Outlook.com
                  </td>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                    SuperSecretPassword177
                  </td>
                </tr>
                <tr>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 text-center justify-center">
                    2
                  </td>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                    Windows 11
                  </td>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                    Miharob1000@Outlook.com
                  </td>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                    SuperSecretPassword177
                  </td>
                </tr>
              </table>
            </div>
            <div className="Berkas text-sm pt-5">
              <span className=" font-bold text-[1.2rem]">Lampiran Berkas</span>
              <table className="font-light pt-10 w-full border-amber-50 border-1">
                <tr>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 text-center justify-center">
                    1
                  </td>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                    Serah Terima
                  </td>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                    https:/google.com/hellowodl
                  </td>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                    25 Maret 2029
                  </td>
                </tr>
                <tr>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 text-center justify-center">
                    2
                  </td>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                    Analisa Kerusakan
                  </td>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                    Https://192.197.213/analisa.pdf
                  </td>
                  <td className="font-light h-8 px-2 border-amber-50 border-1 content-center justify-center">
                    22 Maret 2019
                  </td>
                </tr>
              </table>
            </div>
            <div className="controllbtn flex flex-row w-full justify-between pt-10">
              <div className="editbtn flex flex-row gap-3">
                <div className="h-10 w-auto px-3 border-1 border-green-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-green-300 text-[1rem] flex items-center justify-center">
                  Edit Data
                </div>
                <div className="h-10 w-auto px-3 border-1 border-green-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-green-300 text-[1rem] flex items-center justify-center">
                  Edit Software
                </div>
              </div>
              <div className="exitbtn ">
                {" "}
                <div className="h-10 w-auto px-3 border-1 border-red-300 rounded-sm bg-gray-900/84 hover:bg-gray-900/90 active:bg-gray-500 font-extralight text-red-300 text-[1rem] flex items-center justify-center">
                  Exit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DISPLAY;
