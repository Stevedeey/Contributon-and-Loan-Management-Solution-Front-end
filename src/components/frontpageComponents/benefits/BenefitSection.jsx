import React from "react";
import styled from "styled-components";
import BenefitCard from "./BenefitsCard";

const BenefitSection = styled.div`
  width: 100%;
  display: flex;



  @media screen and (max-width:786px){
      display: flex;
      flex-direction: column;
  }
 
`;

export function BenefitSectionComponent() {
  return (
    <BenefitSection>
      <div className="mini-flex">
        <BenefitCard
          title={"Fast Payment"}
          word={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
          }
          image={"./images/homepageImages/fast_payment.png"}
          alt={"Fast payment"}
        />

        <BenefitCard
          title={"User Friendly"}
          word={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
          }
          image={"./images/homepageImages/user_friendly.png"}
          alt={"User friendly"}
        />
      </div>

      <div className="mini-flex">
        <BenefitCard
          title={"Customer Services"}
          word={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
          }
          image={"./images/homepageImages/customer.png"}
          alt={"Customer Services"}
        />

        <BenefitCard
          title={"Flexibility"}
          word={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
          }
          image={"./images/homepageImages/flexibility.png"}
          alt={"Flexibiliity"}
        />
      </div>
    </BenefitSection>
  );
}
