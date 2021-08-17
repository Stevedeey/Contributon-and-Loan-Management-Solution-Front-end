import React from 'react'
import styled from 'styled-components'

import  CustomerExperienceCard  from "./CustomerExperienceCard";


const CustomerExperienceSectionWrapper = styled.div`
  width: 100%;
  background-color: #faf6ff;
  height: 529px;
  text-align: left;
`;





export function CustomerExperienceSection() {
    return (
      <CustomerExperienceSectionWrapper>
        <CustomerExperienceCard
          para={
            "This Platform is an amazing one, very easy to use, and they privide an excellent service"
          }
          namee={"Adetola Oloyede"}
          image={"./images/homepageImages/testimonial.png"}
        ></CustomerExperienceCard>
      </CustomerExperienceSectionWrapper>
    );
}

