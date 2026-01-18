import { Manitenance_Charts } from "../chart/maintenace";
import { Total_aset } from "../chart/total_asset";
import { Status_Assets } from "../chart/status_asset";
import { Suhu_Chart } from "../chart/suhu";
import { Status_Maintenance } from "../chart/maintenance_progress_status";
import { useEffect, useState } from "react";

import axios from "axios";
const url = import.meta.env.VITE_URL;
function Dashboard() {
  const [Data_Dahsboard, setData_Dahsboard] = useState();
  const [Sinsurdata, setSinsurdata] = useState();
  async function fetch_data() {
    const res = await axios.get(url + "/API/dashboard");
    setData_Dahsboard(res.data);
  }
  useEffect(() => {
    fetch_data();
    // console.log(Data_Dahsboard["Maintennace Index Data"]);
  }, []);
  return (
    <>
      {/* <Manitenance_Charts /> */}
      <div className="absolute inset-0 ml-13 max-sm:relative">
        <div className=" absolute max-sm:relative left-12 top-10 grid  grid-cols-4 max-sm:grid-rows-4 gap-x-15 gap-y-14">
          <div className="chart1 col-span-2 max-sm:row-span-2 h-100 w-209 max-sm:w-fit">
            <Manitenance_Charts
              Data={
                Data_Dahsboard ? Data_Dahsboard["Maintennace Index Data"] : ""
              }
            />
          </div>
          <div className="chart1 col-span-2 max-sm:row-span-2 h-100 w-213">
            <Suhu_Chart Data={Data_Dahsboard ? Data_Dahsboard["Sinsur"] : ""} />
          </div>
          <div className="chart1 h-90 w-95  content-center">
            <Total_aset
              Data={Data_Dahsboard ? Data_Dahsboard["Statistik_Asset"] : ""}
            />
          </div>
          <div className="chart1 h-90 w-95  content-center">
            <Status_Assets
              Data={Data_Dahsboard ? Data_Dahsboard["Statistik_Status"] : ""}
            />
          </div>
          <div className="chart1 col-span-2 max-sm:row-span-2 h-90 w-213 flex justify-center content-center">
            <Status_Maintenance
              Data={
                Data_Dahsboard ? Data_Dahsboard["Maintennace Progress"] : ""
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
