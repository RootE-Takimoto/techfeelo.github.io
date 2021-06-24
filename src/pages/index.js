import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Link, graphql } from "gatsby"

import useMedia from 'use-media';

const Slogan = () => {
  // https://qiita.com/hbsnow/items/2cc10ddb249d3d21c691
  const mediaQuery = Object.freeze({
    xs: '(min-width: 360px)',
    sm: '(min-width: 480px)',
    md: '(min-width: 680px)',
    lg: '(min-width: 800px)',
  })
  const mq = {
    match: [
      useMedia(mediaQuery.lg),
      useMedia(mediaQuery.md),
      useMedia(mediaQuery.xs),
    ],
    colmuns: [4, 3, 2],
  }
  const colmunIndex = mq.match.findIndex((_) => _)
  const colmunLength = colmunIndex === -1 ? 1.5 : mq.colmuns[colmunIndex] // どれともマッチしない場合は1.5
  const movieWidth = colmunLength * 160
  const movieHeight = colmunLength * 90
  return (
    <div>
      <div style={{
        textAlign: "center",
        margin: "6rem",
      }}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "100%" }}>Just Do It!</h1>
        <h2 style={{ fontSize: "1.5rem" }}>手を動かせ。</h2>
      </div>
      <JustDoIt setWidth={movieWidth} setHeight={movieHeight} />
    </div>
  )
};

const JustDoIt = (props) => {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "2rem",
      marginBottom: "1rem",
    }}>
      <iframe
        width={props.setWidth}
        height={props.setHeight} // "315"
        object-fit="contain"
        src="https://www.youtube.com/embed/ZXsQAXx_ao0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // objectFit="contain"
        allowfullscreen
      />
    </div>
  )
}

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Home" />
        <Slogan />
        <h2>お知らせ</h2>
        <p>
          投稿が存在しません。<br />
          There are no posts.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Slogan />
      <h2><Link to="/info" style={{ color: "#333333", textDecoration: "none" }}>お知らせ</Link></h2>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <p>
                  {post.frontmatter.date}&emsp;
                  <Link to={`/info${post.fields.slug}`} itemProp="url" style={{ color: "steelblue" }}>
                    <span itemProp="headline">{title}</span>
                  </Link>
                </p>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection : { eq: "info" } } }
      limit: 3
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`