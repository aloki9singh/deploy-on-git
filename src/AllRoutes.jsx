import React from "react";
import { Route, Routes } from "react-router-dom";
import Css from "../../gitstar/src/Components/Css";

import Home from "../../gitstar/src/Components/Home";
import Html from "../../gitstar/src/Components/Html";
import JavaScript from "../../gitstar/src/Components/Javascript";


export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/html" element={<Html />}></Route>
        <Route path="/css" element={<Css />}></Route>
        <Route path="/javascript" element={<JavaScript />}></Route>
      </Routes>
    </>
  );
};
