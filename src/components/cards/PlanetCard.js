import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import AppContext from "../../context/appContext";

const PlanetCard = ({ planet }) => {
  const appCtx = useContext(AppContext);
  const navigate = useNavigate();
  const height = window.innerHeight * 0.08;

  const planetClickHandler = () => {
    appCtx.setCurrentPlanet(planet);
    navigate("/planet");
  };

  return (
    <PlanetDisplayContainer onClick={planetClickHandler} height={height}>

      <StyledSpan>
        <StyledPlanetName>{planet.name}</StyledPlanetName>
        <StyledP>Terrain: {planet.terrain}</StyledP>

        <StyledP>Pop: {planet.population}</StyledP>

        <StyledP>Residents: {planet.residents ? planet.residents.length : 0}</StyledP>
      </StyledSpan>
    </PlanetDisplayContainer>
  );
};

export default PlanetCard;

const PlanetDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 75%;
  height: ${({ height }) => height}px;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
`;

const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledP = styled.p`
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledPlanetName = styled.p`
  align-self: flex-start;
  font-weight: bold;
`;
