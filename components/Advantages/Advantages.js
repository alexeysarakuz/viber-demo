import React from "react";
import Wrapper from "components/Wrapper/Wrapper";
import styled from "styled-components";
import LocalizedLink from "components/LocalizedLink/LocalizedLink";

import { getStrapiMedia } from "lib/media";

const Advantages = ({ lang, data }) => {
  let advantages = [];

  if (lang === "en") {
    advantages = data.advantages_en.advantage;
  } else if (lang === "fr") {
    advantages = data.advantages_fr.advantage;
  }

  return (
    <AdvantagesWrapper>
      <TriangleTop src="/images/advantages/triangle.png" />
      <AdvantagesBackground>
        <Wrapper>
          <Title>
            {lang === "en" && data.advantages_en.title}
            {lang === "fr" && data.advantages_fr.title}
          </Title>
          <Gradient1 src="/images/advantages/gradient1.png" />
          <AdvantagesRow>
            {advantages.map((item) => (
              <AdvantagesCol>
                <AdvantagesCircle>
                  <img src={getStrapiMedia(item.icon)} alt={item.title} />
                </AdvantagesCircle>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </AdvantagesCol>
            ))}
          </AdvantagesRow>
        </Wrapper>
      </AdvantagesBackground>
    </AdvantagesWrapper>
  );
};

const TriangleTop = styled.img`
  width: 100%;
  display: block;
`;

const AdvantagesWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: -260px;
`;

const AdvantagesBackground = styled.div`
  background-color: #ffffff;
`;

const Title = styled.h2`
  font-weight: 300;
  font-size: 40px;
  line-height: 50px;
  color: #212529;
`;

const Gradient1 = styled.img`
  position: absolute;
  width: 364px;
  height: 643px;
  top: -120px;
  opacity: 0.5;
  left: -100px;
`;

const AdvantagesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 60px;
  position: relative;
  z-index: 100;
`;

const AdvantagesCol = styled.div`
  width: 28%;
  margin-right: 5.3%;
  margin-bottom: 66px;

  h2 {
    font-weight: 300;
    font-size: 20px;
    line-height: 33px;
    color: #212529;
    max-width: 286px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    opacity: 0.6;
    margin-top: 15px;
    max-width: 286px;
  }
`;

const AdvantagesCircle = styled.div`
  width: 90px;
  height: 90px;
  margin-bottom: 23px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: -3px;
    background: #f75584;
    opacity: 0.3;
    filter: blur(30px);
    border-radius: 100px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 55px;
    height: 55px;
    left: 3px;
    bottom: -8px;
    background: #ff96b5;
    opacity: 1;
    filter: blur(20px);
    border-radius: 100px;
  }

  background: linear-gradient(225deg, #ffdae5 0%, #f895b2 100%);
  border-radius: 100px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 35px;
    height: auto;
    transform: translate(-50%, -50%);
  }
`;

export default Advantages;
