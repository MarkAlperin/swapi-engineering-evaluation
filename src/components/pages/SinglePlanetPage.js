import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/appContext";
import Header from "../header/Header";
import ResidentCard from "../cards/ResidentCard";
import helpers from "../../helpers/helpers";

const SinglePlanetPage = () => {
  const appCtx = useContext(AppContext);
  const currentPlanet =
    appCtx.currentPlanet || JSON.parse(localStorage.getItem("currentPlanet"));
  const { swapiData } = appCtx;

  return (
    <>
      <Header showSearchBar={false} />
      {!currentPlanet && <h1>Please select a planet...</h1>}
      {currentPlanet && (
        <>
          {" "}
          <StyledTitle>{currentPlanet.name}</StyledTitle>
          <PlanetInfoContainer>
            <PlanetInfoSpan>
              <StyledP>Climate: {currentPlanet.climate}</StyledP>
              <StyledP>Terrain: {currentPlanet.terrain}</StyledP>
              <StyledP>Pop: {currentPlanet.population}</StyledP>
            </PlanetInfoSpan>
            <PlanetInfoSpan>
              <StyledP>Gravity: {currentPlanet.gravity}</StyledP>
              <StyledP>Water: {currentPlanet.surface_water}</StyledP>
              <StyledP>Rotation: {currentPlanet.rotation_period}</StyledP>
              <StyledP>Orbital: {currentPlanet.orbital_period}</StyledP>
            </PlanetInfoSpan>
          </PlanetInfoContainer>
          <StyledTitle>
            Residents:{" "}
            {currentPlanet.residents && currentPlanet.residents.length}
          </StyledTitle>
          <ResidentsContainer>
            {helpers
              .matchByUrl(currentPlanet.residents, swapiData.people)
              .map((resident, idx) => {
                return <ResidentCard key={idx} resident={resident} />;
              })}
          </ResidentsContainer>
        </>
      )}
    </>
  );
};

export default SinglePlanetPage;

const StyledTitle = styled.h4`
  text-align: center;
`;

const PlanetInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px solid black;
`;

const PlanetInfoSpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 1%;
`;

const StyledP = styled.p``;

const ResidentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  height: ${window.innerHeight * 0.45}px;
`;
