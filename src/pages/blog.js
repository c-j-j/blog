import React from "react";
import get from "lodash/get";
import { Heading } from "../components/Text";
import { HeadingLink, Link } from "../components/Links";

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <div>
        <h2>Blogs</h2>
        {posts.map(({ node }) => {
          const title = get(node, "frontmatter.title") || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <HeadingLink>
                <Link to={node.fields.slug}>{title}</Link>
              </HeadingLink>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
