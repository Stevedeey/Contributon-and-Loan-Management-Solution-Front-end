import React from "react";
//import { PageContainer } from "../../components/pageMainContainer";
import { InnerPageContainer, PageContainer } from "../../components/frontpageComponents/pageMainContainer";
import { Navbar } from "../../components/frontpageComponents/navbar";
import { TopSection } from "./topSection";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
// import { BenefitSection } from "./BenefitSection";

const Title = styled.h1`
  font-weight: 900;
  color: #000;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
`;

function HomePage(props) {
  return (
    <PageContainer>
      <Navbar />
      <TopSection></TopSection>
      <InnerPageContainer>
        <ContentContainer>
          <Title>Benefits of working with us</Title>
        </ContentContainer>
      </InnerPageContainer>
    </PageContainer>
  );
}

export default HomePage;
