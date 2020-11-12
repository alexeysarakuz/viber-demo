import React from "react";
import LocalizedLink from "components/LocalizedLink/LocalizedLink";
import Link from "next/link";
import { fetchAPI } from "lib/api";
import Wrapper from "components/Wrapper/Wrapper";

import Navigation from "components/Navigation/Navigation";
import styled from "styled-components";

import { getStrapiMedia } from "lib/media";
import ReactMarkdown from "react-markdown";
import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import Seo from "components/Seo/Seo";
const Post = ({ post }) => {
  const {
    query: { lang },
  } = useContext(GlobalContext);

  const data = post[0];
  console.log(data);
  return (
    <div>
      <Seo seo={{ metaTitle: data.title }} />
      <Navigation lang={lang} />
      <Wrapper>
        <PostWrapper>
          <PostTitle>{data.title}</PostTitle>
          <PostMeta>
            <MetaColumn>
              Written by <u>{data.blog_authors[0].author}</u>
            </MetaColumn>
            <MetaDivider>|</MetaDivider>
            <MetaColumn>Published on May 11, 2020</MetaColumn>
            <MetaDivider>|</MetaDivider>
            <MetaColumn>
              Saved in <u>{data.blog_categories[0].title}</u>
            </MetaColumn>
          </PostMeta>
          <PostImage src={getStrapiMedia(data.preview)} alt="" />
          <PostContent>
            <ReactMarkdown source={data.content} />
          </PostContent>
        </PostWrapper>
      </Wrapper>
    </div>
  );
};

const PostWrapper = styled.div`
  margin-top: 40px;
`;

const PostTitle = styled.h1`
  font-size: 37px;
  text-align: center;
  line-height: 60px;
  max-width: 900px;
  margin: 0 auto;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  max-width: 70%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  justify-content: center;
`;

const MetaColumn = styled.div`
  u {
    text-decoration: underline;
    color: #7566ed;
  }
`;

const MetaDivider = styled.div`
  color: #bfbfbf;
  font-size: 22px;
  margin-left: 15px;
  margin-right: 15px;
`;

const PostImage = styled.img`
  display: block;
  max-width: 70%;
  margin: 0 auto;
`;

const PostContent = styled.div`
  max-width: 60%;
  margin: 0 auto;
  font-size: 17px;
  line-height: 1.8;
  margin-top: 40px;

  blockquote {
    position: relative;
    font-size: 18px;
    font-style: italic;
    color: #aaaaaa;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 40px;
    padding-right: 40px;
    margin-right: 20px;
    text-align: center;

    &::after {
      content: "";
      position: absolute;
      width: 50px;
      height: 4px;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #7566ed;
    }

    &::before {
      content: "";
      position: absolute;
      width: 50px;
      height: 4px;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #7566ed;
    }
  }

  h1 {
    font-size: 35px;
    line-height: 1.8;
    margin-bottom: 30px;
    margin-top: 45px;
  }

  h2 {
    font-size: 31px;
    line-height: 1.8;
    margin-bottom: 30px;
    margin-top: 45px;
  }

  h3 {
    font-size: 27px;
    line-height: 1.8;
    margin-bottom: 30px;
    margin-top: 45px;
  }

  h4 {
    font-size: 23px;
    line-height: 1.8;
    margin-bottom: 30px;
    margin-top: 45px;
  }

  h5 {
    font-size: 20px;
    line-height: 1.8;
    margin-bottom: 30px;
    margin-top: 45px;
  }

  h6 {
    font-size: 17px;
    line-height: 1.8;
    margin-bottom: 30px;
    margin-top: 45px;
  }

  p {
    margin: 24px 0;
  }

  a {
    text-decoration: underline;
    color: #7566ed;
  }

  b,
  strong {
    font-weight: 600;
  }

  i,
  em {
    font-style: italic;
  }
`;

export async function getStaticProps(ctx) {
  const [post] = await Promise.all([
    fetchAPI(`/blog-posts?SEO=${ctx.params.SEO}`),
  ]);

  return {
    props: { post },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const [posts] = await Promise.all([fetchAPI("/blog-posts")]);

  const params = posts;
  const langs = process.env.langs;

  let paths = [];

  for (let i = 0; i < params.length; i++) {
    for (let k = 0; k < langs.length; k++) {
      paths = [...paths, { params: { SEO: params[i].SEO, lang: langs[k] } }];
    }
  }

  return {
    paths: paths,
    fallback: false,
  };
}

export default Post;
