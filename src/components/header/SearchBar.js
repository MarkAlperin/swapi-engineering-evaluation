import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/appContext";
// import loadArrayOfObjects from "../../api/etlScript";
import api from "../../api/index";

const SearchBar = ({ placeholder }) => {
  const appCtx = useContext(AppContext);
  const [searchInput, setSearchInput] = useState("");
  const width = window.innerWidth * 0.4;

  useEffect(() => {
    let debouncer;
    clearTimeout(debouncer);
    debouncer = setTimeout(() => {
      appCtx.setSearchInput(searchInput);
    }, 250);
    return () => {
      clearTimeout(debouncer);
    };
  }, [searchInput]);

  const clearSearchBar = (e) => {
    e.preventDefault();
    setSearchInput("");
    // console.log(appCtx.nestedResidentData);
    // console.log("residents: ", appCtx.residents)
    // console.log("currentResident: ", appCtx.currentResident);
    // console.log("films: ", appCtx.residents);
  };

  return (
    <SearchBarContainer width={width}>
      <SearchBarInput
        value={searchInput}
        placeholder={`Search for a ${placeholder}...`}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <button onClick={clearSearchBar}>Clear</button>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SearchBarInput = styled.input``;
