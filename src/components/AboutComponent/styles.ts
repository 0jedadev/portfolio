import styled from "styled-components";
export const Container = styled.div`
  width: 75vw;
  height: 70vh;
  margin-left: auto;
  margin-right: auto;
`;
export const Title = styled.p`
  font-weight: 500;
  font-size: 2rem;
  margin-right: 1vw;
  span {
    color: #c778dd;
  }
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

export const DivText = styled.div`
width: 35vw;

`


export const Text = styled.p`
font-weight: 400;
color: #ABB2BF;
`
export const ButtonStyle = {
  border: "#C778DD 1px solid",
  color: "#fff",
  marginTop: "1vw",
  borderRadius: "0",
};