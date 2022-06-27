import React from "react";

import Router from "./components/Routes/Router";
import { AppContextProvider } from "./context/appContext";

function App() {
  return (
    <>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </>
  );
};

export default App;
