import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { HeroTextContainer } from "../.././components/frontpageComponents/heroText/";
import { deviceSize } from "../../components/responsive";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 700px;
  background: url("./images/homepageImages/banner.jpg") no-repeat;
  background-position: 0px -150px;
  background-size: cover;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 500px;
    background-position: 0px 0px;
  }

  @media screen and (max-width: ${deviceSize.tablet}px) {
   
    height: 700px;
    background-position: 0px 0px;
  }

 @media screen and (max-width: 1275px) {
    height: 600px;
    background-position: 0px 0px;
  }
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
  justify-content: space-around;
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

  @media screen and (max-width: 1275px) {
    width: 550px;
    height: 550px;
    background-position: 0px 0px;
  }
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
  const { children } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const isTablet  = useMediaQuery({maxWidth: deviceSize.tablet});

  

  

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <HeroTextContainer />
          {((!isMobile) && (!isTablet)) && (
            <StandOutImageArc>
              <StandoutImage>
                <img
                  src="./images/homepageImages/iPhone X.png"
                  alt="ten-ten-iphone"
                />
              </StandoutImage>
            </StandOutImageArc>
          )}
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
