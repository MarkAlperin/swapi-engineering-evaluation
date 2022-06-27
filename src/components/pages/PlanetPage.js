import React, {useContext} from "react";

import AppContext from "../../context/appContext";

const PlanetPage = () => {
  const appCtx = useContext(AppContext);

  return (
    <div>
      <p>This is the Planet Page</p>
    </div>
  );
};

export default PlanetPage;