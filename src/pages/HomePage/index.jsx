import React from "react";
//import { PageContainer } from "../../components/pageMainContainer";
import { PageContainer } from "../../components/frontpageComponents/pageMainContainer";
import { TopSection } from "./topSection";

function HomePage(props) {
  return (
    <PageContainer>
      <TopSection></TopSection>
    </PageContainer>
  );
}

export default HomePage;
