import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/appContext";
import PlanetCard from "../cards/PlanetCard";
import Header from "../header/Header";
import helpers from "../../helpers/helpers"

const AllPlanetsPage = () => {
  const appCtx = useContext(AppContext);
  const height = window.innerHeight * 0.78;
  const { planets } = appCtx.swapiData;

  return (
    <>
      <Header placeholder={"planet"}/>
      <PlanetsContainer height={height}>
        {planets && helpers.sortByNumResidents(planets.filter(planet => {
          return planet.name.toLowerCase().includes(appCtx.searchInput.toLowerCase()) ;
        })).map((planet, idx) => (
          <PlanetCard key={idx} planet={planet} />
        ))}
      </PlanetsContainer>
    </>
  );
};

export default AllPlanetsPage;

const PlanetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ height }) => height}px;
  overflow-y: scroll;
  padding: 10px;
`;
