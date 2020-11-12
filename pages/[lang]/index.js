import React from "react";
import { fetchAPI } from "lib/api";
import styled from "styled-components";
import Seo from "components/Seo/Seo";
import Navigation from "components/Navigation/Navigation";

import Header from "components/Header/Header";
import BusinessSolutions from "components/BusinessSolutions/BusinessSolutions";
import Audience from "components/Audience/Audience";
import Advantages from "components/Advantages/Advantages";

import { useContext } from "react";
import { GlobalContext } from "pages/_app";

const Home = ({ homepage }) => {
  const {
    query: { lang },
  } = useContext(GlobalContext);

  const {
    header_en,
    header_fr,
    business_en,
    business_fr,
    audience_section_en,
    audience_section_fr,
    advantages_en,
    advantages_fr,
  } = homepage;

  return (
    <div>
      <Seo seo={{ metaTitle: "Home" }} />
      <Navigation lang={lang} />
      <Header lang={lang} data={{ header_en, header_fr }} />
      <BusinessSolutions lang={lang} data={{ business_en, business_fr }} />
      <Audience
        lang={lang}
        data={{ audience_section_en, audience_section_fr }}
      />
      <Advantages lang={lang} data={{ advantages_en, advantages_fr }} />
      {/* <Link href="/[lang]" as="/fr">
        switch lang to fr
      </Link>
      <br/>
      <Link href="/[lang]" as="/en">
        switch lang to en
      </Link> */}
    </div>
  );
};

export async function getStaticProps() {
  const [homepage] = await Promise.all([fetchAPI("/homepage")]);

  return {
    props: {
      homepage,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const paths = process.env.langs.map((lang) => ({ params: { lang: lang } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export default Home;
