import React from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import Link from "gatsby-link";
import FontAwesomeIcon from "./FontAwesomeIcon";

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  grid-gap: ${rhythm(0.5)};
  grid-auto-rows: auto;
  margin-bottom: ${rhythm(2)};
`;

export const Card = ({ heading, icon, children }) => (
  <CardContainer>
    <FontAwesomeIcon icon={icon} size="6x" />
    <h3>{heading}</h3>
    {children}
    <Link to="/about">Learn more</Link>
  </CardContainer>
);
