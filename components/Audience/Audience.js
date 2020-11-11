const css = require("styled-components").css;
import React from "react";
import Wrapper from "components/Wrapper/Wrapper";
import styled, { keyframes } from "styled-components";
import LocalizedLink from "components/LocalizedLink/LocalizedLink";

import { getStrapiMedia } from "lib/media";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const Audience = ({ lang, data }) => {
  let audienceCircles = [];

  if (lang === "en") {
    audienceCircles = data.audience_section_en.statistics;
  }
  else if (lang === "fr") {
    audienceCircles = data.audience_section_fr.statistics;
  }

  return (
    <AudienceWrapper>
      <Wrapper>
        <Title>
          {lang === "fr" && data.audience_section_fr.title}
          {lang === "en" && data.audience_section_en.title}
        </Title>
        <CirclesRow>
          <Col>
            {audienceCircles.map((item, i) =>
              i === 0 ? (
                <Circle1 key={`${i}+${item.title}`}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <CircleText>
                    <h4>{item.title}</h4>
                    <h2>{item.number}</h2>
                    <p>{item.description}</p>
                  </CircleText>
                </Circle1>
              ) : (
                i === 1 && (
                  <Circle2 key={`${i}+${item.title}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <CircleText>
                      <h4>{item.title}</h4>
                      <h2>{item.number}</h2>
                      <p>{item.description}</p>
                    </CircleText>
                  </Circle2>
                )
              )
            )}
          </Col>

          <Col>
            <Gradient />
            {[audienceCircles[2], audienceCircles[3]].map((item, i) =>
              i === 0 ? (
                <Circle5 key={`${i}+${item.title}`}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <CircleText>
                    <h4>{item.title}</h4>
                    <h2>{item.number}</h2>
                    <p>{item.description}</p>
                  </CircleText>
                </Circle5>
              ) : (
                i === 1 && (
                  <Circle4 key={`${i}+${item.title}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <CircleText>
                      <h4>{item.title}</h4>
                      <h2>{item.number}</h2>
                      <p>{item.description}</p>
                    </CircleText>
                  </Circle4>
                )
              )
            )}
          </Col>
        </CirclesRow>
      </Wrapper>
    </AudienceWrapper>
  );
};
const createCSS = (diametr) => {
  let styles = "";

  for (let i = 1; i <= 17; i += 1) {
    let endPosition = "";
    if (i > 13) {
      endPosition = `left: ${getRandomInt(
        diametr - 420,
        diametr - 290
      )}px; top: ${getRandomInt(diametr - 320, diametr + 40)}px`;
      6;
    } else if (i > 9) {
      endPosition = `left: ${getRandomInt(
        diametr - 230,
        diametr - 10
      )}px; top: ${getRandomInt(diametr - 60, diametr)}px`;
    } else if (i > 5) {
      endPosition = `left: ${getRandomInt(
        diametr - 80,
        diametr + 30
      )}px; top: ${getRandomInt(diametr - 240, diametr + 10)}px`;
    } else if (i > 0) {
      endPosition = `left: ${getRandomInt(
        diametr - 260,
        diametr - 40
      )}px; top: ${getRandomInt(diametr - 420, diametr - 300)}px`;
    }

    const blockSize = getRandomInt(5, 7) / 10;

    styles += `

      @keyframes customCircle${i} {
        0% {
          top: 50%;
          left: 50%;
          opacity: 1;
          transform: scale(1);
        }
        
        60% {
          opacity: 0.6;
          transform: scale(${blockSize});
        }

        90% {
          opacity: 0.5;
          transform: scale(0.25);
        }

        100% {
          ${endPosition};
          opacity: 0;
          transform: scale(0);
        }
      }

      &:hover{
        div:nth-child(${i}) {
          width: ${55}px;
          height: ${55}px;
          z-index: 20;
          position: absolute;
          top: 50%;
          left: 50%;
          opacity: 0;
          border-radius: 50%;
          will-change: top, left, opacity, transform;
          animation: customCircle${i} 0.5s 0.${parseInt(
      (i - 1) * (i + 3) * 1.1
    )}s 1 ease-out forwards;
          background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Eo_circle_red_white_heart.svg/1200px-Eo_circle_red_white_heart.svg.png');
          background-size: cover;
        }
      }
       
     `;
  }
  return css`
    ${styles}
  `;
};

const AudienceWrapper = styled.div`
  background-color: #f9f9ff;
  margin-top: -400px;
  padding-top: 400px;
  padding-bottom: 300px;
`;

const Title = styled.h2`
  font-weight: 300;
  font-size: 40px;
  line-height: 50px;
  color: #212529;
  max-width: 488px;
  margin-bottom: 60px;
`;

const CirclesRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Circle = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  box-shadow: 20px 20px 40px rgba(99, 90, 168, 0.07);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    box-shadow: 20px 20px 40px rgba(99, 90, 168, 0.07);
    z-index: 30;
    transition: 0.2s;
  }

  h4 {
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: #212529;
  }

  h2 {
    font-weight: bold;
    font-size: 36px;
    line-height: 30px;
    color: #212529;
    margin: 13px 0;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: #212529;
    opacity: 0.5;
  }
`;

const Col = styled.div`
  display: flex;
  position: relative;

  ${Circle}:nth-child(2) {
    &::after {
      content: "";
      background-color: rgba(255, 255, 255, 1);
    }
  }
`;

const CircleText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 180px;
  text-align: center;
`;

const Circle1 = styled(Circle)`
  background-color: transparent;

  width: 290px;
  height: 290px;
  margin-top: 80px;
  margin-right: 20px;
  position: relative;

  ${createCSS(290)};
`;

const Circle2 = styled(Circle)`
  width: 230px;
  height: 230px;
  position: relative;

  ${createCSS(230)};
`;

const Circle5 = styled(Circle)`
  width: 200px;
  height: 200px;
  transform: translateX(40px);
  margin-top: 120px;
  position: relative;
  background-color: rgba(255, 255, 255, 1);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    box-shadow: 20px 20px 40px rgba(99, 90, 168, 0.07);
    z-index: 30 !important;
    transition: 0.2s;
  }

  z-index: 60;
  ${createCSS(200)};
`;

const Circle3 = styled(Circle)`
  width: 200px;
  height: 200px;
  transform: translateX(40px);
  margin-top: 120px;
  position: relative;
  background-color: rgba(255, 255, 255, 1);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    box-shadow: 20px 20px 40px rgba(99, 90, 168, 0.07);
    z-index: 30;
    transition: 0.2s;
  }

  z-index: 60 ${createCSS(200)};
`;

const Circle4 = styled(Circle)`
  width: 290px;
  height: 290px;
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  z-index: 70 ${createCSS(290)};
`;

const animateGlow = keyframes`
    0% {
        background-position:0% 50%;
    }
    50% {
        background-position:100% 50%;
    }
    100% {
        background-position:0% 50%;
    }
`;

const Gradient = styled.div`
  position: absolute;
  width: 300px;
  height: 538px;
  top: -180px;
  right: 70px;
  z-index: 7;
  background: linear-gradient(
    120.03deg,
    rgba(112, 45, 255, 1) 0.02%,
    #ff2d5b 80%,
    #ffffff 100%
  );
  opacity: 0.25;

  filter: blur(90px);

  background-size: 200% 200%;
  transform: rotate(-130deg);
  animation: ${animateGlow} 3s infinite;
`;
export default Audience;
