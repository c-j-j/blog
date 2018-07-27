import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import { faDesktop, faServer, faCogs } from "@fortawesome/free-solid-svg-icons";

import Bio from "../components/Bio";
import Row from "../components/Row";
import Card from "../components/Card";
import { List, ListItem } from "../components/List";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        <Row>
          <Card heading="Front-end" icon={faDesktop}>
            <List>
              <ListItem>React</ListItem>
              <ListItem>ES8</ListItem>
            </List>
          </Card>
          <Card heading="Back-end" icon={faCogs}>
            <List>
              <ListItem>Node</ListItem>
              <ListItem>Ruby on Rails</ListItem>
              <ListItem>Java</ListItem>
            </List>
          </Card>
          <Card heading="Devops" icon={faServer}>
            <List>
              <ListItem>AWS</ListItem>
              <ListItem>Docker</ListItem>
              <ListItem>Terraform</ListItem>
            </List>
          </Card>
        </Row>

        <h3>Recent Blogs</h3>
        {posts.map(({ node }) => {
          const title = get(node, "frontmatter.title") || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
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
