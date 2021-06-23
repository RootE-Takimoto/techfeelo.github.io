import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Link, graphql } from "gatsby"

class Slogan extends React.Component {
  render() {
    return (
      <div style={{
        textAlign: "center",
        margin: "6rem",
      }}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "100%" }}>Just Do It!</h1>
        <h2 style={{ fontSize: "1.5rem" }}>手を動かせ。</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZXsQAXx_ao0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    );
  }
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