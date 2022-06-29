import React, { useState, useEffect } from "react";

import api from "../api/index";

const AppContext = React.createContext({
  searchInput: "",
  setSearchInput: () => {},
  currentPlanet: {},
  setCurrentPlanet: () => {},
  currentResident: {},
  setCurrentResident: () => {},
  swapiData: {},
});

export const AppContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [swapiData, setSwapiData] = useState({});
  const [currentPlanet, setCurrentPlanet] = useState({});
  const [currentResident, setCurrentResident] = useState({});

  useEffect(() => {
    api
      .getAllFirebase("planets")
      .then((data) => {
        setSwapiData({ ...swapiData, planets: Object.values(data) });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (swapiData.planets) {
      let updatedData = { ...swapiData };
      api
        .getAllFirebase("people")
        .then((data) => {
          updatedData = { ...updatedData, people: Object.values(data) };
          return api.getAllFirebase("films");
        })
        .then((data) => {
          updatedData = { ...updatedData, films: Object.values(data) };
          return api.getAllFirebase("species");
        })
        .then((data) => {
          updatedData = { ...updatedData, species: Object.values(data) };
          return api.getAllFirebase("vehicles");
        })
        .then((data) => {
          updatedData = { ...updatedData, vehicles: Object.values(data) };
          return api.getAllFirebase("starships");
        })
        .then((data) => {
          updatedData = { ...updatedData, starships: Object.values(data) };
          setSwapiData(updatedData);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [swapiData.planets]);

  return (
    <AppContext.Provider
      value={{
        searchInput,
        setSearchInput,
        currentPlanet,
        setCurrentPlanet,
        currentResident,
        setCurrentResident,
        swapiData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
