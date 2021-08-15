import React from "react";
import styled from "styled-components";
import BenefitCard from "./BenefitsCard";

const BenefitSection = styled.div`
  width: 100%;
  display: flex;
  /* align-items: flex-end;
  justify-content: space-between; */
`;



export function BenefitSectionComponent() {
  return (
    <BenefitSection>
      <div>
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

      <div>
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
