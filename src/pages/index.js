import React from "react";
import get from "lodash/get";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Helmet from "react-helmet";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDesktop,
  faServer,
  faCogs,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

import Bio from "../components/Bio";
import { Cards, Card } from "../components/Card";
import { List, ListItem } from "../components/List";

library.add(faDesktop, faServer, faCogs, faWrench);

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
