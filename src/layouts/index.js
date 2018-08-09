import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { rhythm } from "../utils/typography";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import get from "lodash/get";

const MainContainer = styled.main`
  max-width: 900px;
  margin: ${rhythm(1.5)} auto 0;
  padding: ${rhythm(0.5)};
`;

const theme = {
  primaryColor: "#484848"
};

class Template extends React.Component {
  render() {
    const { children } = this.props;
    const siteTitle = get(this.props, "data.site.siteMetadata.title");
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            title={siteTitle}
            meta={[
              {
                name: "description",
                content:
                  "Chris Jordan - London based Full Stack Software Engineer"
              },
              {
                name: "keywords",
                content:
                  "javascript, react, redux, es6, java, ruby, tdd, software development"
              }
            ]}
          >
            <html lang="en" />
          </Helmet>

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

export const pageQuery = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
