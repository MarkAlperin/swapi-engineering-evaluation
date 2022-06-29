import styled from "styled-components";

const GenericCard = ({ item, type }) => {
  const height = window.innerHeight * 0.08;

  return (
    <GenericDisplayContainer height={height}>
      <p>{type === "film" ? item.title : item.name}</p>
    </GenericDisplayContainer>
  );
};

export default GenericCard;

const GenericDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  /* width: 40%; */
  height: ${({ height }) => height}px;
  border: 2px solid black;
  border-radius: 10px;
`;
