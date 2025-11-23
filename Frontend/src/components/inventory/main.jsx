import {
  faSearch,
  faFilter,
  faPlusCircle,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import THETABLE from "./table";
function INVENTROY() {
  return (
    <>
      <div className="absolute inset-0 text-[0.8rem] text-neutral-50 font-mono font-medium">
        <div className="navbar h-15 w-auto content-center  left-15">
          <div className="flex flex-row b items-center top-5 gap-x-2 absolute left-15 cursor-default">
            <div className=" category h-8 w-25 text-center content-center rounded-2xl bg-green-500 hover:bg-green-700">
              <span>Aktif 190</span>
            </div>
            <div className="tools h-8 w-30 bg-pink-400 hover:bg-pink-700 text-center content-center rounded-[25px]">
              <span>Non Aktif 220</span>
            </div>
            <div className="tools h-8 w-29 bg-blue-400 hover:bg-blue-700 text-center content-center rounded-[25px]">
              <span>Perbaikan 70</span>
            </div>
            <div className="tools h-8 w-25 bg-red-400 hover:bg-red-500 text-center content-center rounded-[25px]">
              <span>Rusak 44</span>
            </div>
            <div className="tools h-8 w-25 bg-gray-400 hover:bg-gray-700 text-center content-center rounded-[25px]">
              <span>Musnah 900</span>
            </div>
            <div className="tools h-8 w-40 bg-orange-300 hover:bg-orange-500 text-center content-center rounded-[25px]">
              <span>Tidak Digunakan 900</span>
            </div>
          </div>
          <div className="flex flex-row  items-center top-5 absolute right-5 gap-x-1">
            <div className="tools size-8 text-center content-center">
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
              />
            </div>
            <div className="tools size-8 text-center content-center pr-5">
              <FontAwesomeIcon
                icon={faFilter}
                size="xl"
                className="hover:text-gray-200"
              />
            </div>
            <div className="tools  bg-gray-600 text-end content-center rounded-[25px] flex flex-row">
              <span className="h-8 w-5 content-center">
                <FontAwesomeIcon icon={faSearch} size="xs" />
              </span>
              <input
                type="text"
                className="username text-white h-8 w-26 outline-0 px-2"
                placeholder="search"
              />
            </div>
          </div>
        </div>
        <THETABLE />
      </div>
    </>
  );
}

export default INVENTROY;
