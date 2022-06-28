import React, {useContext} from "react";

import AppContext from "../../context/appContext";

const SinglePlanetPage = () => {
  const appCtx = useContext(AppContext);

  return (
    <div>
      <p>This is the Planet Page</p>
    </div>
  );
};

export default SinglePlanetPage;