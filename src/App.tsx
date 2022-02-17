import { Routes, useLocation } from "react-router-dom";
import { routers } from "./Components/Routers/router";
import "./App.scss";
import Navbar from "./Components/Common/Navbar";
import React, { Fragment } from "react";

function App() {

  let location = useLocation();
  const renderNavbar = () => {
    const listBlock: String[] = [];
    if (listBlock.includes(location.pathname)) {
      return;
    }
    return <Navbar />;
  };


  return (
    <Fragment>
      {renderNavbar()}
      <Routes>
        {routers()}
      </Routes>
    </Fragment>
  );
}

export default App;
