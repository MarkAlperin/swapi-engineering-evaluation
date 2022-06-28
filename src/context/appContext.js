import React, { useState, useEffect } from "react";

import api from "../api/index";
import helpers from "../helpers/helpers";

const AppContext = React.createContext({
  searchInput: "",
  setSearchInput: () => {},
  planets: [],
  currentPlanet: {},
  setCurrentPlanet: () => {},
  residents: [],
  currentResidents: [],
  setCurrentResidentsHandler: () => {},
  nestedResidentData: {},
});

export const AppContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [planets, setPlanets] = useState([]);
  const [currentPlanet, setCurrentPlanet] = useState({});
  const [residents, setResidents] = useState([]);
  const [currentResidents, setCurrentResidents] = useState([]);
  const [nestedResidentData, setNestedResidentData] = useState({});

  useEffect(() => {
    const t0 = performance.now();
    const initialPageLoad = true;
    api.getAllSwapi("planets", initialPageLoad).then((data) => {
      setPlanets(data.planets);
      console.log(`Fetched initial-load planets in: ${Math.round(performance.now() - t0)}ms`);
    }).catch((err) => {
      console.error(err);
    });

    api.getAllSwapi("planets").then((data) => {
      setPlanets(data.planets);
      console.log(`Fetched planets in: ${Math.round(performance.now() - t0)}ms`);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  useEffect(() => {
    if (planets.length) {
      const t0 = performance.now();
      api.getAllSwapi("people").then((data) => {
        setResidents(data.people);
        console.log(`Fetched residents in: ${Math.round(performance.now() - t0)}ms`);
      }).catch((err) => {
        console.error(err);
      });

      const keywords = ["species", "films", "vehicles", "starships"];
      api.getAllNestedDataSwapi(keywords).then((data) => {
        setNestedResidentData(data);
        console.log(`Fetched nestedResidentData in: ${Math.round(performance.now() - t0)}ms`);
      }).catch((err) => {
        console.error(err);
      });
    }
  }, [planets]);



  const setCurrentResidentsHandler = (residents) => {
  setCurrentResidents(helpers.getNumsFromStrings(residents));
};

  return (
    <AppContext.Provider
      value={{
        searchInput,
        setSearchInput,
        planets,
        currentPlanet,
        setCurrentPlanet,
        residents,
        currentResidents,
        setCurrentResidentsHandler,
        nestedResidentData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
