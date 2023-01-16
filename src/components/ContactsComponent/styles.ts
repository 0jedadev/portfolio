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

export const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DivText = styled.div`
  width: 35vw;
`;
export const Text = styled.p`
  font-weight: 400;
  color: #abb2bf;

`;
export const DivContact = styled.div`
  width: 30vw;
  height: 10vw;
  border: #abb2bf 1px solid;
`;
export const SubTitle = styled.div`
  font-weight: 600;
  font-size: 1rem;
  margin: 1vw;
`;
export const DivSocial = styled.div`
  margin: 1vw;
  display: flex;
  flex-flow: column nowrap;
  div {
    align-items: center;
    display: flex;
    margin: 0.1vw;
    p {
      padding-left: 10px;
      
    };

  }
  
`;
