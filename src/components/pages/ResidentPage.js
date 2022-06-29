import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/appContext";
import Header from "../header/Header";
import GenericCard from "../cards/GenericCard";
import helpers from "../../helpers/helpers";

const ResidentPage = () => {
  const appCtx = useContext(AppContext);
  const currentResident = appCtx.currentResident || JSON.parse(localStorage.getItem("currentResident"));
  const { swapiData } = appCtx;
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
    films,
  } = currentResident;

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
          {homeworld && swapiData.planets && (
            <StyledP>
              Homeworld:{" "}
              {helpers.matchByUrl(homeworld, swapiData.planets)[0].name}
            </StyledP>
          )}
        </ResidentInfoSpan>
      </ResidentInfoContainer>
      <TripleDisplayContainer>
        {films && (
          <ArrayDisplayContainer>
            <StyledName>Films</StyledName>
            {helpers.matchByUrl(films, swapiData.films).map((film, idx) => {
              return <GenericCard key={idx} item={film} type={"film"}/>;
            })}
          </ArrayDisplayContainer>
        )}
        {starships && (
          <ArrayDisplayContainer>
            <StyledName>Starships</StyledName>
            {helpers
              .matchByUrl(starships, swapiData.starships)
              .map((starship, idx) => {
                return <GenericCard key={idx} item={starship} />;
              })}
          </ArrayDisplayContainer>
        )}
        {vehicles && (
          <ArrayDisplayContainer>
            <StyledName>Vehicles</StyledName>
            {helpers
              .matchByUrl(vehicles, swapiData.vehicles)
              .map((vehicle, idx) => {
                return <GenericCard key={idx} item={vehicle} />;
              })}
          </ArrayDisplayContainer>
        )}
      </TripleDisplayContainer>
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

const TripleDisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: ${window.innerHeight * 0.5}px;
`;

const ArrayDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: ${window.innerWidth * 0.25}px;
`;
