import {
  faDesktop,
  faChartPie,
  faFileCirclePlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SideBar() {
  return (
    <div className="bar fixed left-0 bg-gray-950 h-dvh w-13 justify-center content-center">
      <div className="menu flex flex-col gap-5 text-purple-300 font-extrabold cursor-default">
        <div className="addinv size-13 content-center text-center border-y-2">
          <FontAwesomeIcon
            icon={faFileCirclePlus}
            size="xl"
            className="hover:text-purple-400"
          />
        </div>
        <div className="dashboard size-13 content-center text-center">
          <FontAwesomeIcon
            icon={faChartPie}
            size="xl"
            className="hover:text-purple-400"
          />
        </div>
        <div className="inventory size-13 content-center text-center">
          <FontAwesomeIcon
            icon={faDesktop}
            size="xl"
            className="hover:text-purple-400"
          />
        </div>
      </div>
      <div className="exit size-13 content-center text-center text-purple-300 absolute bottom-10">
        <FontAwesomeIcon
          icon={faRightFromBracket}
          size="xl"
          className="hover:text-purple-400"
        />
      </div>
    </div>
  );
}

export default SideBar;
