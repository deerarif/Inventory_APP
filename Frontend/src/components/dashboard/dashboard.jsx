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
      <div className="ml-13 h-[calc(100vh-120px)] max-sm:h-auto">
        <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full max-sm:grid-cols-1 max-sm:grid-rows-none px-10">
          {/* TOP LEFT */}
          <div className="bg-transparent h-full">
            <Suhu_Chart Data={Data_Dahsboard ? Data_Dahsboard["Sinsur"] : ""} />
          </div>

          {/* RIGHT (SPAN 2 ROWS) */}
          <div className="row-span-2 flex items-center justify-center pt-10">
            <div className="w-full h-full flex justify-center aspect-square">
              <Total_aset
                Data={Data_Dahsboard ? Data_Dahsboard["Statistik_Asset"] : ""}
              />
            </div>
          </div>

          {/* BOTTOM LEFT */}
          <div className="flex h-full items-cente justify-center">
            <div className="w-full max-w-[350px] aspect-square">
              <Status_Assets
                Data={Data_Dahsboard ? Data_Dahsboard["Statistik_Status"] : ""}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
