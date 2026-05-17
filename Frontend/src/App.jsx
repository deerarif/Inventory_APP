import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LOGINPAGE from "./components/login";
import SIDEBAR from "./components/side_bar";
import DASHBOARD from "./components/dashboard/dashboard";
import INVENTROY from "./components/inventory/main";
import ANTVSHOW from "./components/maintenance/antv_show";
import DISPLAY from "./components/display/show";
import ADDNEWDEVICE from "./components/display/anddnew";
import ANTIVIRUS from "./components/maintenance/avtiviruses";
import SCAN_BARCODE from "./components/scan_assets/scan";
function App() {
  return (
    <>
      <BrowserRouter>
        <SIDEBAR />
        <Routes>
          <Route path="/" element={<INVENTROY />} />
          <Route path="/dashboard" element={<DASHBOARD />} />
          <Route path="/login" element={<LOGINPAGE />} />
          <Route path="/add_inv" element={<ADDNEWDEVICE />} />
          <Route path="/detail/:id" element={<DISPLAY />} />
          <Route path="/antvshow/:id" element={<ANTVSHOW />} />
          <Route path="/ANTV" element={<ANTIVIRUS />} />
          <Route path="/scan" element={<SCAN_BARCODE />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
