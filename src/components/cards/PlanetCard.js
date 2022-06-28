import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import AppContext from "../../context/appContext";

const PlanetCard = ({ planet }) => {
  const appCtx = useContext(AppContext);
  const navigate = useNavigate();

  const planetClickHandler = () => {
    appCtx.setCurrentPlanet(planet);
    appCtx.setCurrentResidentsHandler(planet.residents);
    navigate("/planet");
  };

  return (
    <PlanetDisplayContainer onClick={planetClickHandler}>
      <h4>{planet.name}</h4>
      <StyledSpan>
        <p>Terrain: {planet.terrain}</p>

        <StyledP>Pop: {planet.population}</StyledP>

        <StyledP>Residents: {planet.residents.length}</StyledP>
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
  width: 60%;
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
