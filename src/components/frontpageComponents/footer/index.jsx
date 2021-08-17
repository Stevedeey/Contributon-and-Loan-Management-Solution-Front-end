import React from "react";
import styled from "styled-components";

const FooterCourtesyandSocialMedia = styled.div`
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  margin-top: -30px;
`;

const SuperWrapper = styled.div`
  background-color: #8c30f5;
  width: 100%;
  height: auto;
`;

const FooterWrapperRowToCentralize = styled.div`
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FooterWrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Centralize = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const MenuItemSection = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  margin: 30px;
  p {
    margin-right: 20px;
    font-size: 16px;
  }
`;

const LogoSection = styled.div`
  width: 146px;
  height: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;



const Instagram = styled.div`
  width:34px;
  height: 34px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Twitter = styled.div`
  width: 34px;
  height: 34px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Youtube = styled.div`
  width: 34px;
  height: 34px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Courtsey = styled.div`
  ///© 2021 TenTen Solutions. All rights reserved

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  width: 25%;
  color: #fff;
`;

const Social = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export function Footer() {
  return (
    <SuperWrapper>
      <FooterWrapperRowToCentralize>
        <FooterWrapperColumn>
          <Centralize>
            <LogoSection>
              <img
                src={"./images/homepageImages/footerLogo.png"}
                alt={"Footer Logo"}
              />
            </LogoSection>
          </Centralize>

          <Centralize>
            <MenuItemSection>
              <p>About</p>
              <p>Features</p>
              <p>Pricing</p>
              <p>Careers</p>
              <p>Help</p>
              <p>Privacy Policy</p>
            </MenuItemSection>
          </Centralize>
        </FooterWrapperColumn>
      </FooterWrapperRowToCentralize>

      <FooterCourtesyandSocialMedia>
        <Courtsey>© 2021 TenTen Solutions. All rights reserved</Courtsey>
        <Social>
          <Instagram>
            <img src="./images/homepageImages/instagram.png" alt="" />
          </Instagram>

          <Twitter>
            <img src="./images/homepageImages/twitter.png" alt="" />
          </Twitter>

          <Youtube>
            <img src="./images/homepageImages/youtube.png" alt="" />
          </Youtube>
        </Social>
      </FooterCourtesyandSocialMedia>
      <div></div>
    </SuperWrapper>
  );
}
