import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border-top: #abb2bf 1px solid;
`;
export const DivContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 75vw;
`;

export const Logo = styled.img`
  width: 2vw;
`;
export const Text = styled.p`
  font-weight: 400;
  color: #abb2bf;
`;
export const SubText = styled.p`
  width: 30vw;
  font-weight: 200;
  font-size: 0.9rem;
`;
export const SubText1 = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
`;

export const FirstContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2vw;
  width: 73vw;
  align-items: center;
  a {
    padding-left: 1vw;
    text-decoration: none;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
export const SecondContent = styled.div`
  padding-top: 1vw;
  display: flex;
  justify-content: space-between;
`;

export const ThirdContent = styled.div`
  text-align: center;
  margin: 1vw;
  p {
    font-weight: 400;
    color: #abb2bf;
    font-size: 0.75rem;
  }
`;
