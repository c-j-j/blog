import React from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "gatsby-link";

const Card = styled.div`
  box-shadow: 4px 4px 4px -4px rgba(0, 0, 0, 0.2);
  flex-basis: calc(33% - ${rhythm(0.5)});
  flex-shrink: 0;
  flex-grow: 0;
  text-align: center;
`;

export default ({ heading, icon, children }) => (
  <Card>
    <FontAwesomeIcon icon={icon} size="6x" />
    <h3>{heading}</h3>
    {children}
    <Link href="/">Learn more</Link>
  </Card>
);
