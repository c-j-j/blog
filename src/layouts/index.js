import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import Nav from "../components/Nav";

const MainContainer = styled.main`
  max-width: 900px;
  margin: ${rhythm(1.5)} auto 0;
`;

const theme = {
  primaryColor: "#CCC"
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