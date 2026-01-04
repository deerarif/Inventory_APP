import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LOGINPAGE from "./components/login";
import SIDEBAR from "./components/side_bar";
import DASHBOARD from "./components/dashboard";
import INVENTROY from "./components/inventory/main";
import MAINTENANCE_SCHEDULE from "./components/maintenance/schedule";
import DISPLAY from "./components/display/show";
import ADDNEWDEVICE from "./components/display/anddnew";

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
          <Route path="/maintenance" element={<MAINTENANCE_SCHEDULE />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
