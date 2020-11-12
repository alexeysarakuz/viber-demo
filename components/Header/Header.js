import React from "react";
import Wrapper from "components/Wrapper/Wrapper";
import styled from "styled-components";
import LocalizedLink from "components/LocalizedLink/LocalizedLink";
import ScrollAnimation from "react-animate-on-scroll";

import { getStrapiMedia } from "lib/media";

const Header = ({ lang, data }) => (
  <HeaderWrapper>
    <Wrapper>
      <HeaderRow>
        <HeaderLeft>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce={true}
            duration={0.9}
            offset={50}
            delay={100}
          >
            <HeaderTitle>
              {lang === "fr" && data.header_fr.title}
              {lang === "en" && data.header_en.title}
            </HeaderTitle>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce={true}
            duration={0.9}
            offset={50}
            delay={300}
          >
            <HeaderParagraph>
              {lang === "fr" && data.header_fr.paragraph}
              {lang === "en" && data.header_en.paragraph}
            </HeaderParagraph>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce={true}
            duration={0.9}
            offset={50}
            delay={500}
          >
            <LocalizedLink href="/another1">
              <HeaderButton>
                {lang === "fr" && data.header_fr.cta_text}
                {lang === "en" && data.header_en.cta_text}
              </HeaderButton>
            </LocalizedLink>
          </ScrollAnimation>
        </HeaderLeft>
        <HeaderRight>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce={true}
            duration={0.9}
            offset={50}
            delay={300}
          >
            <HeaderRightRow>
              <Chatting
                src="/images/header/chatting.png"
                alt="Comfortable chatting"
              />
              <Phone src="/images/header/iphone.png" alt="preview of viber" />
              <Calls src="/images/header/calls.png" alt="Cool calls" />
            </HeaderRightRow>
          </ScrollAnimation>
        </HeaderRight>
      </HeaderRow>
    </Wrapper>
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 150px;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1000px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const HeaderLeft = styled.div`
  max-width: 500px;
  position: relative;
  z-index: 12;
`;

const HeaderTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 50px;
  font-weight: 300;
  color: #212529;
  /* margin-top: 15vh; */
`;

const HeaderParagraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #212529;
  opacity: 0.5;
  max-width: 300px;
  margin-top: 20px;
  margin-bottom: 35px;
`;

const HeaderButton = styled.a`
  display: inline-block;
  cursor: pointer;
  background: #7465ef;
  border-radius: 8px;
  padding: 15px 37px;
  padding-top: 17px;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  border: none;
  letter-spacing: 0.3px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`;

const HeaderRight = styled.div`
  &::after {
    content: "";
    position: absolute;
    top: 90px;
    right: -40px;
    background-image: url("/images/header/gradient.png");
    width: 999.71px;
    height: 625.99px;
    transform: scale(1.3);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 10;
  }

  .animated {
    position: relative;
    z-index: 15;
  }
`;

const HeaderRightRow = styled.div`
  display: flex;
  position: relative;
  z-index: 15;
  align-items: flex-start;
  margin-top: 50px;
`;

const Phone = styled.img`
  width: 285px;
`;

const Chatting = styled.img`
  width: 190px;
  margin-right: 28px;
  margin-top: auto;
  margin-bottom: 40px;
`;

const Calls = styled.img`
  width: 190px;
  margin-left: 28px;
  margin-top: 60px;
`;

export default Header;
