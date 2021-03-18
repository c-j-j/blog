import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import rem from "../../utils/rem";
import { rhythm } from "../../utils/typography";
import { navbarHeight } from "../../utils/sizes";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
`;

const StartWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const EndWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavBar = styled.div`
  background-color: ${props => props.theme.primaryColor};
  height: ${rem(navbarHeight)};
  padding: 0.5rem;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: white;
  text-decoration: none;
  border: 3px solid white;
  padding: 0 ${rhythm(0.5)};
  font-size: 1rem;
  transition: opacity 0.2s, transform 0.2s;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`;

const NavLink = styled(Link)`
  flex: 0 0 auto;
  display: inline-block;
  text-decoration: none;
  line-height: ${rem(navbarHeight)};
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: ${rem(0.4)};
  color: currentColor;
  margin-left: ${rhythm(0.5)};
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`;

export default () => (
  <NavBar>
    <Wrapper>
      <StartWrapper>
        <Link to="/">
          <Logo>Chris Jordan LTD</Logo>
        </Link>
      </StartWrapper>
      <EndWrapper>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </EndWrapper>
    </Wrapper>
  </NavBar>
);
