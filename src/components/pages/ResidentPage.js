import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/appContext";
import Header from "../header/Header";
import GenericCard from "../cards/GenericCard";
import helpers from "../../helpers/helpers";

const ResidentPage = () => {
  const appCtx = useContext(AppContext);
  const currentResident =
    appCtx.currentResident ||
    JSON.parse(localStorage.getItem("currentResident"));
  const { swapiData } = appCtx;

  return (
    <>
      <Header showSearchBar={false} placeholder={"person"} />
      {!currentResident && <h1>Please select a planet and resident...</h1>}
      {currentResident && (
        <>
          <StyledName>{currentResident.name}</StyledName>>
          <ResidentInfoContainer>
            <ResidentInfoSpan>
              <StyledP>Birth Year: {currentResident.birth_year}</StyledP>
              <StyledP>Eye Color: {currentResident.eye_color}</StyledP>
              <StyledP>Hair Color: {currentResident.hair_color}</StyledP>
            </ResidentInfoSpan>
            <ResidentInfoSpan>
              <StyledP>Height: {currentResident.height}</StyledP>
              <StyledP>Mass: {currentResident.mass}</StyledP>
              {currentResident.homeworld && swapiData.planets && (
                <StyledP>
                  Homeworld:{" "}
                  {
                    helpers.matchByUrl(
                      currentResident.homeworld,
                      swapiData.planets
                    )[0].name
                  }
                </StyledP>
              )}
            </ResidentInfoSpan>
          </ResidentInfoContainer>
          <TripleDisplayContainer>
            {currentResident.films && (
              <ArrayDisplayContainer>
                <StyledName>Films</StyledName>
                {helpers
                  .matchByUrl(currentResident.films, swapiData.films)
                  .map((film, idx) => {
                    return <GenericCard key={idx} item={film} type={"film"} />;
                  })}
              </ArrayDisplayContainer>
            )}
            {currentResident.starships && (
              <ArrayDisplayContainer>
                <StyledName>Starships</StyledName>
                {helpers
                  .matchByUrl(currentResident.starships, swapiData.starships)
                  .map((starship, idx) => {
                    return <GenericCard key={idx} item={starship} />;
                  })}
              </ArrayDisplayContainer>
            )}
            {currentResident.vehicles && (
              <ArrayDisplayContainer>
                <StyledName>Vehicles</StyledName>
                {helpers
                  .matchByUrl(currentResident.vehicles, swapiData.vehicles)
                  .map((vehicle, idx) => {
                    return <GenericCard key={idx} item={vehicle} />;
                  })}
              </ArrayDisplayContainer>
            )}
          </TripleDisplayContainer>
        </>
      )}
    </>
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
