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

  }, []);

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
