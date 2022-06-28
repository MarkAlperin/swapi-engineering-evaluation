import React, { useState, useEffect } from "react";

import api from "../api/index";
import helpers from "../helpers/helpers";

const AppContext = React.createContext({
  searchTerm: "",
  setSearchTerm: () => {},
  planets: [],
  currentPlanet: {},
  setCurrentPlanet: () => {},
  residents: [],
  currentResidents: [],
  setCurrentResidentsHandler: () => {},
  extraResidentData: {},
});

export const AppContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
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


  }, []);

  useEffect(() => {
    if (planets.length && !Object.keys(nestedResidentData).length) {
      const t0 = performance.now();
      api.getAllSwapi("planets").then((data) => {
        setPlanets(data.planets);
        console.log(`Fetched planets in: ${Math.round(performance.now() - t0)}ms`);
      }).catch((err) => {
        console.error(err);
      });

      api.getAllSwapi("people").then((data) => {
        setResidents(data.people);
        console.log(`Fetched residents in: ${Math.round(performance.now() - t0)}ms`);
      }).catch((err) => {
        console.error(err);
      });

      api.getAllSwapi("vehicles").then((data) => {
        setNestedResidentData(helpers.formatNestedResidentData(data, nestedResidentData))
        console.log(`Fetched vehicles in: ${Math.round(performance.now() - t0)}ms`);
      }).catch((err) => {
        console.error(err);
      });

      api.getAllSwapi("films").then((data) => {
        setNestedResidentData(helpers.formatNestedResidentData(data, nestedResidentData))
        console.log(`Fetched films in: ${Math.round(performance.now() - t0)}ms`);
      }).catch((err) => {
        console.error(err);
      });

      api.getAllSwapi("species").then((data) => {
        setNestedResidentData(helpers.formatNestedResidentData(data, nestedResidentData))
        console.log(`Fetched species in: ${Math.round(performance.now() - t0)}ms`);
      }).catch((err) => {
        console.error(err);
      });

      api.getAllSwapi("starships").then((data) => {
        setNestedResidentData(helpers.formatNestedResidentData(data, nestedResidentData))
        console.log(`Fetched vehicles in: ${Math.round(performance.now() - t0)}ms`);
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
        searchTerm,
        setSearchTerm,
        planets,
        currentPlanet,
        setCurrentPlanet,
        residents,
        currentResidents,
        setCurrentResidentsHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
