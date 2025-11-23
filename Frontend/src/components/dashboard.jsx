import { Manitenance_Charts } from "./chart/maintenace";
function Dashboard() {
  return (
    <>
      {/* <Manitenance_Charts /> */}
      <div className="absolute inset-0">
        <div className=" absolute left-26 top-10 grid grid-cols-4 gap-x-15 gap-y-14">
          <div className="chart1 col-span-2 h-100 w-209">
            <Manitenance_Charts />
          </div>
          <div className="chart1 col-span-2 h-100 w-213">
            <Manitenance_Charts />
          </div>
          <div className="chart1 h-90 w-95  content-center">
            <Manitenance_Charts />
          </div>
          <div className="chart1 h-90 w-95  content-center">
            <Manitenance_Charts />
          </div>
          <div className="chart1 col-span-2 h-90 w-213 ">
            <Manitenance_Charts />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
