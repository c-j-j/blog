import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import {
  faDesktop,
  faServer,
  faCogs,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

import Bio from "../components/Bio";
import Footer from "../components/Footer";
import { Cards, Card } from "../components/Card";
import { List, ListItem } from "../components/List";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        <Cards>
          <Card heading="Front-end" icon="desktop">
            <List>
              <ListItem>React</ListItem>
              <ListItem>HTML5</ListItem>
              <ListItem>ES8</ListItem>
            </List>
          </Card>
          <Card heading="Back-end" icon="cogs">
            <List>
              <ListItem>Node</ListItem>
              <ListItem>Ruby on Rails</ListItem>
              <ListItem>Java</ListItem>
            </List>
          </Card>
          <Card heading="Devops" icon="server">
            <List>
              <ListItem>AWS</ListItem>
              <ListItem>Docker</ListItem>
              <ListItem>Terraform</ListItem>
            </List>
          </Card>
          <Card heading="Craftsmanship" icon="wrench">
            <List>
              <ListItem>TDD</ListItem>
              <ListItem>Agile</ListItem>
              <ListItem>CI/CD</ListItem>
            </List>
          </Card>
        </Cards>
      </div>
    );
  }
}

export default BlogIndex;
