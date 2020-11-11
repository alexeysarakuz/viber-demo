import React from "react";
import Wrapper from "components/Wrapper/Wrapper";
import styled from "styled-components";
import LocalizedLink from "components/LocalizedLink/LocalizedLink";

import { useContext } from "react";
import { GlobalContext } from "pages/_app";

import { getStrapiMedia } from "lib/media";

const Navigation = ({ lang }) => {
  const { navigation } = useContext(GlobalContext);
  
  let navigation_links = [];

  if (lang === "en") {
    navigation_links = navigation.navigation_en.navigation_list;
  }
  else if (lang === "fr") {
    navigation_links = navigation.navigation_fr.navigation_list;
  }
  
  return (
    <NavWrapper>
      <Wrapper>
        <NaigationRow>
          <Left>
            <LocalizedLink href="/">
              <a>
                <Logo src={getStrapiMedia(navigation.Logo)} />
              </a>
            </LocalizedLink>
            <Subtitle>
              {lang === "fr" && navigation.navigation_fr.logo_subtitle}
              {lang === "en" && navigation.navigation_en.logo_subtitle}
            </Subtitle>
          </Left>
          <Center>
            {navigation_links &&
              navigation_links.map((item) => (
                <li key={item.title}>
                  <LocalizedLink href={item.link}>
                    <a>
                      {item.title}
                    </a>
                  </LocalizedLink>
                </li>
              ))}
          </Center>
          <Right>
            <LocalizedLink href={navigation.link}>
              <Button>
                {lang === "fr" && navigation.navigation_fr.cta_text}
                {lang === "en" && navigation.navigation_en.cta_text}
              </Button>
            </LocalizedLink>
          </Right>
        </NaigationRow>
      </Wrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  border-bottom: 1px solid rgb(101, 92, 172, 0.2);
`;

const NaigationRow = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  display: block;
`;

const Subtitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  margin-left: 15px;
  font-size: 16px;
  line-height: 22px;
  color: #212529;
  transform: translateY(-1.5px);
`;

const Center = styled.ul`
  display: flex;
  transform: translateX(-60px);

  li {
    margin-right: 15px;
    margin-left: 15px;

    a {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #212529;
    }
  }
`;

const Right = styled.div``;

const Button = styled.a`
  display: block;
  padding: 11px 33px;
  background: #ffffff;
  border: 1px solid #7566ed;
  box-sizing: border-box;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #7566ed;
`;

export default Navigation;
