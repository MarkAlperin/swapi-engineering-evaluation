import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/appContext";
import Header from "../header/Header";
import helpers from "../../helpers/helpers";

const ResidentPage = () => {
  const appCtx = useContext(AppContext);
  const {
    name,
    birth_year,
    eye_color,
    hair_color,
    height,
    mass,
    homeworld,
    gender,
    species,
    starships,
    vehicles,
  } = appCtx.currentResident;
  const homeworldIdx = helpers.getNumFromString(homeworld);

  return (
    <div>
      <Header showSearchBar={true} placeholder={"person"} />
      <StyledName>{name}</StyledName>>
      <ResidentInfoContainer>
        <ResidentInfoSpan>
          <StyledP>Birth Year: {birth_year}</StyledP>
          <StyledP>Eye Color: {eye_color}</StyledP>
          <StyledP>Hair Color: {hair_color}</StyledP>
        </ResidentInfoSpan>
        <ResidentInfoSpan>
          <StyledP>Height: {height}</StyledP>
          <StyledP>Mass: {mass}</StyledP>
          <StyledP>Homeworld: {appCtx.planets[0]}</StyledP>
        </ResidentInfoSpan>
      </ResidentInfoContainer>
    </div>
  );
};

export default ResidentPage;

const StyledName = styled.h4`
  text-align: center;
`;

const ResidentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px solid black;
`;

const ResidentInfoSpan = styled.span`
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
  height: ${({ height }) => height}px;
`;
