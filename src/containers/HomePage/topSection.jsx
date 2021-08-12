import React from "react";
import styled from "styled-components";
import { HeroTextContainer } from "../.././components/heroText/";

import backImage from "../../images/homepageImages/banner.jpg";
import heroImage from "../../images/homepageImages/iPhone X.png";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 700px;
  background: url(${backImage});
  background-position: 0px -150px;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.7);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const StandOutImageArc = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: #d6b1ff;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

const StandoutImage = styled.div`
  width: 20.5em;
  height: 35em;

  img {
    width: 100%;
    height: 100%;

  
  }
`;

export function TopSection(props) {
  return (
    <TopSectionContainer>
      <BackgroundFilter>
        <TopSectionInnerContainer>
          <HeroTextContainer />
          <StandOutImageArc>
            <StandoutImage>
              <img src={heroImage} alt="ten-ten-iphone" />
            </StandoutImage>
          </StandOutImageArc>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
