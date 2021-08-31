import React from "react";
import styled from "styled-components";
import { Button } from "../button";

const LoanApplicationWrapper = styled.div`
  width: 100%;
  

`;

const LoanApplicationContentWrapper = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;


  @media screen and (max-width: 764px) {
    flex-direction: column;
  }
`;
const LeftImageContainer = styled.div`
  width: 568px;
  height: 272px;
  margin-right: -80px;
  img {
    width: 100%;
    height: 100%;
  }
   @media screen and (max-width: 1147px) {
   
      img{
        width: 80%;
        height: 80%;
      }
    }

`;

const ApplyForLoanTextAndButtonWrapper = styled.div`
  display: flex;
  margin-left: -80px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ApplyForLoanText = styled.h1`
  font-family: Poppins;
  width: 399px;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 64px;
  text-align: center;
  font-feature-settings: "salt" on, "liga" off;

  @media screen and (max-width: 908px) {
    font-size: 38px;
    width: 298px;
  }
`;

export function LoanApplicationSection() {
  return (
    <LoanApplicationWrapper>
      <LoanApplicationContentWrapper>
        <LeftImageContainer>
          <img
            src="./images/homepageImages/applicationImage.png"
            alt="Loan Application"
          />
        </LeftImageContainer>

        <ApplyForLoanTextAndButtonWrapper>
          <ApplyForLoanText>Apply for a Loan Today!!!</ApplyForLoanText>

          <Button
            rad={"0"}
            btnbkgColor={"#8c30f5"}
            btnFgColor={"#fff"}
            wth={"190px"}
            heit={"48px"}
            pad={"0px 5px"}
          >
            Apply for a loan
          </Button>
        </ApplyForLoanTextAndButtonWrapper>
      </LoanApplicationContentWrapper>
    </LoanApplicationWrapper>
  );
}
