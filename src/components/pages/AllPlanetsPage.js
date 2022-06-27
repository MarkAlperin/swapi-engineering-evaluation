import React, { useContext } from "react";

import AppContext from "../../context/appContext";

const AllPlanetsPage = () => {
  const appCtx = useContext(AppContext);

  console.log(appCtx.searchTerm);
  return (
    <div>
        <p>This is the All Planets Page</p>

    </div>
  );
};

export default AllPlanetsPage;
