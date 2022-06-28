import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/appContext";

const SearchBar = () => {
  const appCtx = useContext(AppContext);
  const width = window.innerWidth * 0.4;

  return (
    <SearchBarContainer width={width}>
      <SearchBarInput  placeholder="Search for a planet or resident"on/>
    </SearchBarContainer>
  );



};

export default SearchBar;

const SearchBarContainer = styled.input`
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SearchBarInput = styled.input``;