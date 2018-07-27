import React from "react";
import styled from "styled-components";
import rem from "../../utils/rem";
import { rhythm } from "../../utils/typography";
import { navbarHeight } from "../../utils/sizes";

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
  display: inline-block;
`;

const NavLink = styled.a`
  color: white;
  padding: 0 ${rhythm(0.5)};
  display: inline-block;
  line-height: ${rem(navbarHeight)};
`;

export default () => (
  <NavBar>
    <StartWrapper>
      <Logo>Logo</Logo>
    </StartWrapper>
    <EndWrapper>
      <NavLink href="/">About</NavLink>
      <NavLink href="/">Contact</NavLink>
      <NavLink href="/">Blog</NavLink>
    </EndWrapper>
  </NavBar>
);
