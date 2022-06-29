import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import AppContext from "../../context/appContext";

const ResidentCard = ({ resident }) => {
  const appCtx = useContext(AppContext);
  const navigate = useNavigate();
  const height = window.innerHeight * 0.08;

  const residentClickHandler = () => {
    appCtx.setCurrentResident(resident);
    navigate("/resident");
  };

  return (
    <ResidentDisplayContainer onClick={residentClickHandler} height={height}>
      <p>{resident.name}</p>
    </ResidentDisplayContainer>
  );
};

export default ResidentCard;


const ResidentDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 40%;
  height: ${({ height }) => height}px;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
`;