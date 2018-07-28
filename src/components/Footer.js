import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-color: ${props => props.theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10rem;
  color: white;
  clip-path: polygon(0 0, 100% 33%, 100% 100%, 0% 100%);

  @media (max-width: 700px) {
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0% 100%);
  }
`;

export default () => (
  <FooterSection>
    <span>Want to get in touch?</span>>
    <span>Twitter</span>
    <span>LinkedIn</span>
    <span>GitHub</span>
  </FooterSection>
);
