import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/appContext";
import PlanetCard from "../cards/PlanetCard";

const AllPlanetsPage = () => {
  const appCtx = useContext(AppContext);
  const height = window.innerHeight * 0.8;

  const planetClickHandler = (planet) => {
    // appCtx.setCurrentPlanet()
    console.log(planet)
  }

  return (
    <div>
      <h1>This is the All Planets Page</h1>
      <PlanetsContainer height={height}>
        {appCtx.planets.map((planet, idx) => (
          <PlanetCard key={idx} planet={planet} planetClickHandler={planetClickHandler}/>
        ))}
      </PlanetsContainer>
    </div>
  );
};

export default AllPlanetsPage;

const PlanetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({height}) => height}px;
  overflow-y: scroll;
`;
