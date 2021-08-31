import React from "react";
//import { PageContainer } from "../../components/pageMainContainer";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/frontpageComponents/pageMainContainer";

// import { Navbar } from "../../components/frontpageComponents/navbar";

import { NavBarr } from "../../components/frontpageComponents/navbar2/NavBarr";


import { TopSection } from "./topSection";

import styled from "styled-components";

import { deviceSize } from "../../components/responsive";

import { BenefitSectionComponent } from "../../components/frontpageComponents/benefits/BenefitSection";

import { GetCashSectionComponent } from "../../components/frontpageComponents/getCash/GetCashSection";

import { CustomerExperienceSection } from "../../components/frontpageComponents/customerExperience/CustomerExperienceSection";

import { LoanApplicationSection } from "../../components/frontpageComponents/loanApplicationSection/LoanApplicationSection";

import { Footer } from "../../components/frontpageComponents/footer";

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
        {/* <Navbar /> */}
        <TopSection></TopSection>
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
