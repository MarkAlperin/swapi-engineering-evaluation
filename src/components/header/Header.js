import React from "react";
import styled from "styled-components";

import NavLink from "./NavLink";
import SearchBar from "./SearchBar";

const Header = ({ placeholder, showSearchBar = true }) => {
  return (
    <HeaderContainer>
      <StyledP>Star Wars Planets and People</StyledP>
      {showSearchBar && <SearchBar placeholder={placeholder} />}
      <NavLinksContainer>
        <NavLink text="All Planets" link="/" />
        <NavLink text="Planet Info" link="/planet" />
        <NavLink text="People" link="/residents" />
      </NavLinksContainer>
    </HeaderContainer>
  );
};

export default Header;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 3%;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;
  color: white;
`;

const StyledP = styled.p`
  font-weight: bold;
  margin-left: 3%;
`;
