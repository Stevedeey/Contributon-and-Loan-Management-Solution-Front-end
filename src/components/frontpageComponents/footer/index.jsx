import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";



const SuperWrapper = styled.div`
  background-color: #8c30f5;
  width: 100%;
  height: 400px;
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
  margin-top: 70px;
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

const SocialMedia = styled.div`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover {
    color: #d0fcfd;
  }
`;

const Courtsey = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  width: 25%;
  color: #fff;
`;

const SocialMediaWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Flink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 5px;
  }
`;

const FooterCourtesyandSocialMedia = styled.div`
  padding: 30px 0;

  margin: 0 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
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
              <Flink>
                <p>About</p>
              </Flink>
              <Flink>
                <p>Features</p>
              </Flink>

              <Flink>
                <p>Pricing</p>
              </Flink>
              <Flink>
                <p>Careers</p>
              </Flink>
              <Flink>
                <p>Help</p>
              </Flink>
              <Flink>
                <p>Privacy Policy</p>
              </Flink>
            </MenuItemSection>
          </Centralize>
        </FooterWrapperColumn>
      </FooterWrapperRowToCentralize>

      <FooterCourtesyandSocialMedia>
        <Courtsey>© 2021 TenTen Solutions. All rights reserved</Courtsey>
        <SocialMediaWrapper>
          <SocialMedia>
            <FontAwesomeIcon icon={faInstagram} />
          </SocialMedia>

          <SocialMedia>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialMedia>

          <SocialMedia>
            <FontAwesomeIcon icon={faFacebook} />
          </SocialMedia>
        </SocialMediaWrapper>
      </FooterCourtesyandSocialMedia>
      <div></div>
    </SuperWrapper>
  );
}
