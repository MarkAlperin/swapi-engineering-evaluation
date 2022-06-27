import React, {useContext} from "react";

import AppContext from "../../context/appContext";

const ResidentPage = () => {
  const appCtx = useContext(AppContext);

  return (
    <div>
      <p>This is the Resident Page</p>
    </div>
  );
};

export default ResidentPage;