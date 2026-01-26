import {
  faDesktop,
  faChartPie,
  faFileCirclePlus,
  faRightFromBracket,
  faNoteSticky,
  faBarcode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function SideBar() {
  const [Menu, setMenu] = useState();
  const navigate = useNavigate();

  return (
    <div className="bar fixed left-0 z-50 max-sm:left-auto max-sm:z-50 max-sm:bottom-0 max-sm:h-auto max-sm:w-full bg-gray-950 h-dvh  w-13 justify-center content-center">
      {/* bar fixed left-0 max-sm:left-auto max-sm:bottom-0 max-sm:h-auto max-sm:w-full bg-gray-950 h-dvh max-sm:h-auto w-13 justify-center content-center */}
      <div className="menu flex flex-col max-sm:flex-row max-sm:gap-0 max-sm:justify-evenly gap-5 text-purple-300 font-extrabold cursor-default">
        <div
          className={
            Menu === "addinv"
              ? "addinv size-13 content-center text-center border-y-2"
              : "addinv size-13 content-center text-center "
          }
        >
          <FontAwesomeIcon
            icon={faFileCirclePlus}
            size="xl"
            className="hover:text-purple-400"
            onClick={() => {
              navigate("/add_inv");
              setMenu("addinv");
            }}
          />
        </div>
        <div
          className={
            Menu === "dashboard"
              ? "dashboard size-13 content-center text-center border-y-2"
              : "dashboard size-13 content-center text-center "
          }
        >
          <FontAwesomeIcon
            icon={faChartPie}
            size="xl"
            className="hover:text-purple-400"
            onClick={() => {
              navigate("/dashboard");
              setMenu("dashboard");
            }}
          />
        </div>
        <div
          className={
            Menu === "asset"
              ? "assset size-13 content-center text-center border-y-2"
              : "assset size-13 content-center text-center "
          }
        >
          <FontAwesomeIcon
            icon={faDesktop}
            size="xl"
            className="hover:text-purple-400"
            onClick={() => {
              navigate("/");
              setMenu("asset");
            }}
          />
        </div>
        {/* <div
          className={
            Menu === "maintenance"
              ? "assset size-13 content-center text-center border-y-2"
              : "assset size-13 content-center text-center "
          }
        >
          <FontAwesomeIcon
            icon={faNoteSticky}
            size="xl"
            className="hover:text-purple-400"
            onClick={() => {
              navigate("/maintenance");
              setMenu("maintenance");
            }}
          />
        </div> */}
        <div
          className={
            Menu === "maintenance"
              ? "assset size-13 content-center text-center border-y-2"
              : "assset size-13 content-center text-center "
          }
        >
          <FontAwesomeIcon
            icon={faBarcode}
            size="xl"
            className="hover:text-purple-400"
            onClick={() => {
              navigate("/scan");
              setMenu("scan");
            }}
          />
        </div>
      </div>
      {/* <div className="exit size-13 content-center text-center text-purple-300 absolute bottom-10 max-sm:top-0">
        <FontAwesomeIcon
          icon={faRightFromBracket}
          size="xl"
          className="hover:text-purple-400"
          onClick={() => {
            navigate("/login");
            setMenu(null);
          }}
        />
      </div> */}
    </div>
  );
}

export default SideBar;
