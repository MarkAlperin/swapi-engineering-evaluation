import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavLink = ({ text, link }) => {
  const navigate = useNavigate();

  const navLinkClickHandler = () => {
    navigate(link);
  }

  return (
    <NavLinkContainer onClick={navLinkClickHandler}>
      <p>{text}</p>
    </NavLinkContainer>
  );
};

export default NavLink;

const NavLinkContainer = styled.div`
  margin: 10px;
  cursor: pointer;
  width: 25%;
`;