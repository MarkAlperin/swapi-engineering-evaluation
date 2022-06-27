import React, { useState, useEffect } from "react";

import api from "../api/index";

const AppContext = React.createContext({
  searchTerm: "helloWorld",
  setSearchTerm: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("hello");

  useEffect(() => {
    // this will probably execute an initial api call...
    api.getAllPlanets().then((data) => {
      console.log(data);
    }
  )}, []);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
