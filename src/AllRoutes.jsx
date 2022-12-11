import React from "react";
import { Route, Routes } from "react-router-dom";
import Css from "./Components/Css";

import Home from "./Components/Home";
import Html from "./Components/Html";
import JavaScript from "./Components/Javascript";


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
