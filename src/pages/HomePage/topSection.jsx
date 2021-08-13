import React from "react";
import styled from "styled-components";
import { HeroTextContainer } from "../.././components/frontpageComponents/heroText/";

// import backImage from "../../../public/images/homepageImages/banner.jpg";
// import heroImage from "../../../public/images/homepageImages/iPhone X.png";
  /* background: url(${backImage}); */

const TopSectionContainer = styled.div`
  width: 100%;
  height: 700px;
  background: url("./images/homepageImages/banner.jpg");
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
  justify-content: center;
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
  width: 19.5em;
  height: 33em;

  img {
    width: 100%;
    height: 100%;
    margin-top: 12px;
    margin-left: 12px;
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
              <img
                src="./images/homepageImages/iPhone X.png"
                alt="ten-ten-iphone"
              />
            </StandoutImage>
          </StandOutImageArc>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
