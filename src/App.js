import React from "react";

import { AppContextProvider } from "./context/appContext";
import Router from "./components/Routes/Router";

function App() {
  return (
    <AppContextProvider>
      <Router />
    </AppContextProvider>
  );
}

export default App;
