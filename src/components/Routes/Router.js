import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllPlanetsPage from "../pages/AllPlanetsPage";
import PlanetPage from "../pages/PlanetPage";
import ResidentPage from "../pages/ResidentPage";


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPlanetsPage />} />
          <Route path="/planet-page" element={<PlanetPage />} />
          <Route path="/resident-page" element={<ResidentPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
