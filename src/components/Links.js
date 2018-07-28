import styled from "styled-components";
import t from "../utils/typography";

import _Link from "gatsby-link";

export const Link = styled(_Link)`
  text-decoration: none;
  color: inherit;

  &:visited {
    text-decoration: none;
    color: ${props => props.theme.primaryColor};
    opacity: 5%;
  }

  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

export const HeadingLink = styled.h3`
  margin-bottom: 0px;
  color: ${props => props.theme.primaryColor};
`;
