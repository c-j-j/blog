import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import styled, { ThemeProvider } from "styled-components";
import { rhythm } from "../utils/typography";
import Nav from "../components/Nav";
import {
  faDesktop,
  faServer,
  faCogs,
  faWrench
} from "@fortawesome/free-solid-svg-icons";
library.add(faDesktop, faServer, faCogs, faWrench);

const MainContainer = styled.main`
  max-width: 900px;
  margin: ${rhythm(1.5)} auto 0;
`;

const theme = {
  primaryColor: "#484848"
};

class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Nav />

          <MainContainer>{children()}</MainContainer>
        </div>
      </ThemeProvider>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
