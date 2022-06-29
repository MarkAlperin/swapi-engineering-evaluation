import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/appContext";
import Header from "../header/Header";
import ResidentCard from "../cards/ResidentCard";
import helpers from "../../helpers/helpers";

const SinglePlanetPage = () => {
  const appCtx = useContext(AppContext);
  const currentPlanet = appCtx.currentPlanet || JSON.parse(localStorage.getItem("currentPlanet"));
  const { swapiData } = appCtx;
  const {
    name,
    climate,
    terrain,
    population,
    residents,
    gravity,
    surface_water,
    rotation_period,
    orbital_period,
  } = currentPlanet;

  console.log("currentPlanet: ", currentPlanet);

  return (
    <>
      <Header showSearchBar={false} />
      <StyledTitle>{name}</StyledTitle>
      <PlanetInfoContainer>
        <PlanetInfoSpan>
          <StyledP>Climate: {climate}</StyledP>
          <StyledP>Terrain: {terrain}</StyledP>
          <StyledP>Pop: {population}</StyledP>
        </PlanetInfoSpan>
        <PlanetInfoSpan>
          <StyledP>Gravity: {gravity}</StyledP>
          <StyledP>Water: {surface_water}</StyledP>
          <StyledP>Rotation: {rotation_period}</StyledP>
          <StyledP>Orbital: {orbital_period}</StyledP>
        </PlanetInfoSpan>
      </PlanetInfoContainer>
        <StyledTitle>Residents: {residents && residents.length}</StyledTitle>
      <ResidentsContainer>
        {helpers.matchByUrl(residents, swapiData.people).map((resident, idx) => {
          return <ResidentCard key={idx} resident={resident} />;
        })}
      </ResidentsContainer>
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
