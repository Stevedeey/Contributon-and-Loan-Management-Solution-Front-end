import React from "react";
import styled from "styled-components";
import { Marginer } from "../../marginer";
// import { deviceSize } from "../../responsive";
import GetCardCash from "./GetCashCard";

const GetCashSectionContainer = styled.div`
  width: 100%;
  background-color: #d0fcff;
  display: flex;
  flex-direction: column;

`;

// const GetCashSectionContainerInner = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const GetCashSectionContainerEachPart = styled.div`
//   width: 100%;
//   display: flex;
//   padding-left: 30px;
//   padding-right: 30px;
//   justify-content: center;
//   align-items: center;
// `;

const Title = styled.h2`
  font-weight: 900;
  color: #000;
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  text-align: center;
  
`;

export function GetCashSectionComponent() {
  return (
    <GetCashSectionContainer>
      <Marginer direction="vertical" margin={100}/>
      <div className="container">
        <Title>Get Cash Within Minutes</Title>
        <div className="row">
          <div className="col-lg-4">
            <GetCardCash
              image={"./images/homepageImages/applyIcon.png"}
              alt={"Apply for Loan Icon "}
              heading={"Apply for a Loan"}
              paragraph={
                "Apply and we will instantly run your credit score and decide if you qualify."
              }
            ></GetCardCash>
          </div>
          <div class="col-lg-4">
            <GetCardCash
              image={"./images/homepageImages/profileIcon.png"}
              alt={"Profile Icon "}
              heading={"Create your Profile"}
              paragraph={"Sign up for an accountand let us get to know you."}
            ></GetCardCash>
          </div>
          <div className="col-lg-4">
            <GetCardCash
              image={"./images/homepageImages/profileIcon.png"}
              alt={"Get Cash Icon "}
              heading={"Get Cash"}
              paragraph={
                "If you qualify,your cash will be disbursed within minutes to your bank account."
              }
            ></GetCardCash>
          </div>
        </div>
      </div>
    </GetCashSectionContainer>
  );
}

// export function GetCashSectionComponent() {
//   return (
//     <GetCashSectionContainer>
//       <Title>Get Cash Within Minutes</Title>

//       <GetCashSectionContainerEachPart>

//         <GetCardCash
//           image={"./images/homepageImages/profileIcon.png"}
//           alt={"Profile Icon "}
//           heading={"Create your Profile"}
//           paragraph={"Sign up for an accountand let us get to know you."}
//         ></GetCardCash>

//         <GetCardCash
//           image={"./images/homepageImages/applyIcon.png"}
//           alt={"Apply for Loan Icon "}
//           heading={"Apply for a Loan"}
//           paragraph={
//             "Apply and we will instantly run your credit score and decide if you qualify."
//           }
//         ></GetCardCash>

//         <GetCardCash
//           image={"./images/homepageImages/profileIcon.png"}
//           alt={"Get Cash Icon "}
//           heading={"Get Cash"}
//           paragraph={
//             "If you qualify,your cash will be disbursed within minutes to your bank account."
//           }
//         ></GetCardCash>
//       </GetCashSectionContainerEachPart>
//     </GetCashSectionContainer>
//   );
// }
