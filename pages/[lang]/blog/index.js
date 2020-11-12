import React from "react";
import LocalizedLink from "components/LocalizedLink/LocalizedLink";
import Link from "next/link";
import { fetchAPI } from "lib/api";
import Wrapper from "components/Wrapper/Wrapper";

import Navigation from "components/Navigation/Navigation";
import styled from "styled-components";
import Seo from "components/Seo/Seo";

import { getStrapiMedia } from "lib/media";
import { useContext } from "react";
import { GlobalContext } from "pages/_app";

const Blog = ({ posts, blogpage }) => {
  const {
    query: { lang },
  } = useContext(GlobalContext);

  console.log(blogpage);

  return (
    <div>
      <Navigation lang={lang} />
      <Seo seo={{ metaTitle: "Blog" }} />
      <Wrapper>
        <BlogPageTitle>
          {lang === "fr" && blogpage.content_fr.title}
          {lang === "en" && blogpage.content_en.title}
        </BlogPageTitle>
        <BlogPageParagraph>
          {lang === "fr" && blogpage.content_fr.subtitle}
          {lang === "en" && blogpage.content_en.subtitle}
        </BlogPageParagraph>
        <PostsListing>
          {posts.map((post) => (
            <Post key={post.SEO}>
              <LocalizedLink href={`/post/${post.SEO}`}>
                <a>
                  <PostPrevivew src={getStrapiMedia(post.preview)} alt="" />
                  <PostTitle>{post.title}</PostTitle>
                  <PostCategory>
                    {post.blog_categories[0].title}
                  </PostCategory>
                </a>
              </LocalizedLink>
            </Post>
          ))}
        </PostsListing>
        <Link href="/[lang]" as="/fr">
          switch lang to fr
        </Link>
        <br />
        <Link href="/[lang]" as="/en">
          switch lang to en
        </Link>
      </Wrapper>
    </div>
  );
};

const BlogPageTitle = styled.h1`
  font-size: 30px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const BlogPageParagraph = styled.p`
  line-height: 20px;
  font-size: 15px;
  max-width: 300px;
  margin-bottom: 40px;
`;

const PostsListing = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
`;

const Post = styled.div`
  width: 23%;

  a {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  /* margin-left: 1.5%; */
  margin-right: 2%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;

  a {
    color: #000000;
  }
`;

const PostPrevivew = styled.img`
  max-width: 100%;
`;

const PostTitle = styled.h2`
  font-size: 17px;
  line-height: 26px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const PostCategory = styled.div`
  font-size: 16px;
  line-height: 26px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: auto;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

export async function getStaticProps() {
  const [posts, blogpage] = await Promise.all([
    fetchAPI("/blog-posts"),
    fetchAPI("/blog"),
  ]);

  return {
    props: { posts, blogpage },
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

export default Blog;
