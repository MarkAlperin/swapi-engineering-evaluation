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
  currentResident: {},
  setCurrentResident: () => {},
  nestedResidentData: {},
});

export const AppContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [planets, setPlanets] = useState([]);
  const [currentPlanet, setCurrentPlanet] = useState({});
  const [residents, setResidents] = useState([]);
  const [currentResident, setCurrentResident] = useState({});
  const [nestedResidentData, setNestedResidentData] = useState({});

  useEffect(() => {
    const t0 = performance.now();
    api.getAllFirebase("planets").then((data) => {
      console.log(`api.getAll planets took: ${Math.round(performance.now() - t0)} milliseconds.`);
      console.log(Object.values(data))
;     setPlanets(Object.values(data));
    });
  }, []);

  // useEffect(() => {
  //   if (planets.length) {
  //     const t0 = performance.now();
  //     api.getAllFirebase("people").then((data) => {
  //       const t1 = performance.now();
  //       console.log(`api.getAllFirebase() took ${t1 - t0} milliseconds.`);
  //       setResidents(data);
  //     })
  //   }
  // }, [planets]);

  return (
    <AppContext.Provider
      value={{
        searchInput,
        setSearchInput,
        planets,
        currentPlanet,
        setCurrentPlanet,
        residents,
        currentResident,
        setCurrentResident,
        nestedResidentData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
