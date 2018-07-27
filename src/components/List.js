import React from "react";
import styled from "styled-components";

export const List = styled.ul`
  display: span;
  margin: 0;
`;

export const ListItem = styled.li`
  display: inline;
  &:not(:last-child):after {
    content: " | ";
  }
`;
