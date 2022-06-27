import React, { useState, useEffect } from "react";

import api from "../api/index";

const AppContext = React.createContext({
  searchTerm: "",
  setSearchTerm: () => {},
  planets: [],
  currentPlanet: {},
  setCurrentPlanet: () => {},
  getResident: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [planets, setPlanets] = useState([]);
  const [currentPlanet, setCurrentPlanet] = useState({});

  useEffect(() => {
    let t0 = performance.now();
    api.getAllPlanets({firstReq: true}).then((data) => {
      setPlanets(data);
      let t1 = performance.now();
      console.log(`First10 request took ${t1 - t0} milliseconds.`);
    });


    t0 = performance.now();
    api.getAllPlanets({firstReq: false}).then((data) => {
      setPlanets(data);
      console.log("second data: ", data);
      let t1= performance.now();
      console.log(`GetAll60 request took ${t1 - t0} milliseconds.`);
    })

  }, []);

 const getResidents = (residents) => {

  };

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        planets,
        currentPlanet,
        setCurrentPlanet,
        getResidents,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
