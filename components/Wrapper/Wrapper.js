import React from "react";
import styled from "styled-components";

const Wrapper = ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  margin: 0 auto;
  max-width: 95%;

  @media (min-width: 1700px) {
    width: 1480px;
  }

  /* @media (min-width: 1900px) {
        width: 1734px;
    } */

  @media (max-width: 1600px) {
    width: 1430px;
  }

  @media (max-width: 1500px) {
    width: 1350px;
  }

  @media (max-width: 1440px) {
    width: 1250px;
  }

  @media (max-width: 1300px) {
    width: 1100px;
  }

  @media (max-width: 1150px) {
    width: 900px;
  }

  @media (max-width: 500px) {
    max-width: 96%;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export default Wrapper;
