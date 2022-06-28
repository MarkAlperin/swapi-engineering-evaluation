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
});

export const AppContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [planets, setPlanets] = useState([]);
  const [currentPlanet, setCurrentPlanet] = useState({});
  const [residents, setResidents] = useState([]);
  const [currentResidents, setCurrentResidents] = useState([]);

  useEffect(() => {
    api.getAllPlanets({firstReq: true}).then((data) => {
      setPlanets(data);
    }).catch((err) => {
      console.error(err);
    });

    api.getAllPlanets({firstReq: false}).then((data) => {
      setPlanets(data);
    }).catch((err) => {
      console.error(err);
    });

    api.getAllResidents().then((data) => {
      setResidents(data);
    }).catch((err) => {
      console.error(err);
    });

  }, []);

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
