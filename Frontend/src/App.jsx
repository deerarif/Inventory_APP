import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LOGINPAGE from "./components/login";
import SIDEBAR from "./components/side_bar";
import DASHBOARD from "./components/dashboard";
import INVENTROY from "./components/inventory/main";
import ADDNEWDOCS from "./components/inventory/newdocs";
import DISPLAY from "./components/display/show";
import ADDNEWDEVICE from "./components/display/anddnew";

function App() {
  return (
    <>
      {/* <LOGINPAGE /> */}
      <SIDEBAR />
      <DISPLAY />
    </>
  );
}

export default App;
