import React from "react";
import Wrapper from "components/Wrapper/Wrapper";
import styled from "styled-components";
import LocalizedLink from "components/LocalizedLink/LocalizedLink";

import { getStrapiMedia } from "lib/media";

const BusinessSolutions = ({ lang, data }) => {

  let solutions = [];
  
  if (lang === "en") {
    solutions = data.business_en.Solutions;
  } else if (lang === "fr") {
    solutions = data.business_fr.Solutions;
  }

  return (
    <BusinessWrapper>
      <Wrapper>
        <BusinessRow>
          <Left>
            <PhoneWrapper>
              {lang === "en" && (
                <Phone
                  src={getStrapiMedia(data.business_en.image)}
                  alt="preview of viber"
                />
              )}
              {lang === "fr" && (
                <Phone
                  src={getStrapiMedia(data.business_fr.image)}
                  alt="preview of viber"
                />
              )}
            </PhoneWrapper>
          </Left>
          <Right>
            <Title>
              {lang === "en" && data.business_en.title}
              {lang === "fr" && data.business_fr.title}
            </Title>
            <SolutionsList>
              {solutions.map((item, i) => (
                <Solution key={i}>
                  <img src={getStrapiMedia(item.image)} alt="ads" />
                  <p>
                    {lang === "en" && item.solution}
                    {lang === "fr" && item.solution}
                  </p>
                </Solution>
              ))}
            </SolutionsList>
          </Right>
        </BusinessRow>
      </Wrapper>
      <TriangleBottom src="/images/business-section/triangle.png" />
    </BusinessWrapper>
  );
};

const BusinessWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 150px;
  transform: translateY(-150px);
`;

const BusinessRow = styled.div`
  justify-content: space-around;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -30px;
    left: -30px;
    background-image: url("/images/business-section/gradient.png");
    width: 520.71px;
    height: 658.99px;
    transform: scaleX(1.6) scaleY(1.6);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 10;
  }
`;

const PhoneWrapper = styled.div`
  width: 235px;
  margin-left: 120px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    z-index: 20;
    bottom: -25px;
    left: 120px;
    width: 214.08px;
    height: 397.99px;
    background: #ffffff;
    opacity: 0.45;
    border-radius: 30px;
    transform: matrix(-0.97, -0.26, -0.26, 0.97, 0, 0);
  }

  &::before {
    content: "";
    position: absolute;
    left: -90px;
    top: -10px;
    width: 223.89px;
    height: 397.99px;
    z-index: 20;
    background: #ffffff;
    opacity: 0.45;
    border-radius: 30px;
    transform: rotate(-15deg);
  }
`;

const Phone = styled.img`
  width: 100%;
  position: relative;
  z-index: 30;
`;

const Right = styled.div`
  max-width: 500px;
`;

const Title = styled.h2`
  font-weight: 300;
  font-size: 40px;
  line-height: 50px;
  color: #212529;
`;

const SolutionsList = styled.div`
  margin-top: 60px;
  padding-bottom: 30px;
`;

const Solution = styled.div`
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 14px;
  border-radius: 20px;
  box-shadow: 0px 20px 30px rgba(174, 49, 124, 0);
  transition: 0.3s;
  margin-top: 20px;

  img {
    display: block;
    width: 91px;
    margin-right: 30px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #212529;
    opacity: 0.7;
  }

  &:hover {
    box-shadow: 0px 15px 25px rgba(174, 49, 124, 0.055);
  }
`;

const TriangleBottom = styled.img`
  width: 100%;
`;

export default BusinessSolutions;
