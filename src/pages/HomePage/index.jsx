import React from "react";

import {
  InnerPageContainer,
  PageContainer,
} from "../../components/FrontpageComponents/pageMainContainer";



import { NavBarr } from "../../components/FrontpageComponents/navbar/NavBarr";


import { TopSection } from "./topSection";

import styled from "styled-components";

import { deviceSize } from "../../components/Responsive";

import { BenefitSectionComponent } from "../../components/FrontpageComponents/benefits/BenefitSection";

import { GetCashSectionComponent } from "../../components/FrontpageComponents/getCash/GetCashSection";

import { CustomerExperienceSection } from "../../components/FrontpageComponents/customerExperience/CustomerExperienceSection";

import { LoanApplicationSection } from "../../components/FrontpageComponents/loanApplicationSection/LoanApplicationSection";

import { Footer } from "../../components/FrontpageComponents/footer";

const Title = styled.h1`
  font-weight: 900;
  color: #000;
  /* width: 520px; */
  text-align: left;
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  margin-top: 48px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-top: 50px !important;
    font-size: 2.5em;
    width: 80%;
    margin: 0 auto;

  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
   padding: 5px;
  }
`;

function HomePage(props) {
  return (
    <>
      <NavBarr />
      <PageContainer>
        <TopSection/>

        <InnerPageContainer>
          <ContentContainer>
            <Title>Benefits of working with us</Title>
            <BenefitSectionComponent />
          </ContentContainer>
        </InnerPageContainer>
        <GetCashSectionComponent />
        {/* Get cash is the one with the background */}
        <CustomerExperienceSection />
        <LoanApplicationSection />
        <Footer />
      </PageContainer>
    </>
  );
}

export default HomePage;
