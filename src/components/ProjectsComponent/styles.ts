import styled from "styled-components";

export const Container = styled.div`
  width: 75vw;
  height: 75vh;
  margin-left: auto;
  margin-right: auto;
`;

export const DivTitle = styled.div`
  height: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75vw;

  div {
    display: flex;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 2rem;
  margin-right: 1vw;
  span {
    color: #c778dd;
  }
`;
export const SubTitle = styled.p`
  font-weight: 500;
  font-size: 1rem;
  margin-right: 0.5vw;
`;

export const DivCard = styled.div`
  display: flex;
`;
