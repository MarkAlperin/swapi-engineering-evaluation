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
  const [currentPlanet, setCurrentPlanet] = useState(null);
  const [currentResident, setCurrentResident] = useState(null);


  useEffect(() => {
    let keywords = [];
    let updatedData = { ...swapiData };
    if (!swapiData.planets) {
      keywords = ["planets"];
    } else if (!swapiData.people) {
      keywords = ["people", "films", "vehicles", "starships", "species"];
    }
      Promise.all(keywords.map((keyword) => {
        return api.getAllFirebase(keyword)
      })).then((data) => {
        data.forEach((item, idx) => {
          updatedData = {...updatedData, [keywords[idx]]: Object.values(item)}
        })
        if (data.length) {
          setSwapiData(updatedData);
        }
      })
        .catch((err) => {
          console.error(err);
        });
  }, [swapiData]);

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
