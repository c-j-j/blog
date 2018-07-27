import React from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "gatsby-link";

const Card = styled.div`
  box-shadow: 4px 4px 4px -4px rgba(0, 0, 0, 0.2);
  flex-basis: 90%;
  margin: 0 auto;

  flex-shrink: 1;
  flex-grow: 0;
  text-align: center;

  @media screen and (min-width: 700px) {
    max-width: calc(33% - 1em);
  }
`;

export default ({ heading, icon, children }) => (
  <Card>
    <FontAwesomeIcon icon={icon} size="6x" />
    <h3>{heading}</h3>
    {children}
    <Link href="/">Learn more</Link>
  </Card>
);
