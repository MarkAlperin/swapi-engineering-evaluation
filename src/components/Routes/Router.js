import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllPlanetsPage from "../pages/AllPlanetsPage";
import SinglePlanetPage from "../pages/SinglePlanetPage";
import ResidentPage from "../pages/ResidentPage";


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPlanetsPage />} />
          <Route path="/planet" element={<SinglePlanetPage />} />
          <Route path="/residents" element={<ResidentPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
