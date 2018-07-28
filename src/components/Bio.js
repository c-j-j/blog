import React from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";

import profilePic from "./profile-pic.jpg";
import { TextContainer } from "./TextContainer";

const ProfileImg = styled.img`
  clip-path: circle(50%);
  max-width: 300px;
`;

const BioSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: ${rhythm(0.5)};
  justify-items: center;
  align-items: center;
`;

const ProfileText = styled.p``;

class Bio extends React.Component {
  render() {
    return (
      <BioSection>
        <ProfileImg src={profilePic} alt={"Chris Jordan"} />
        <TextContainer>
          <ProfileText>
            Hello! I am a software engineer contractor based in London. I have
            been developing software professionally since 2011.
          </ProfileText>
        </TextContainer>
      </BioSection>
    );
  }
}

export default Bio;
