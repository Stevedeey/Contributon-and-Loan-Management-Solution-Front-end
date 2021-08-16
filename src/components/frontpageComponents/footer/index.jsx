import React from "react";
import styled from "styled-components";

const FooterCourtesyandSocialMedia = styled.div`
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-top: -30px;
  
`;

const SuperWrapper = styled.div`
  background-color: #8c30f5;
  width: 100%;
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
  margin:30px;
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
  width: 25%;
  height: 24px;
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
        <Social>Face book</Social>
      </FooterCourtesyandSocialMedia>
      <div></div>
    </SuperWrapper>
  );
}
