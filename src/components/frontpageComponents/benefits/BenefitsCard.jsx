import React from "react";
import styled from "styled-components";
import { Marginer } from "../../marginer";

import { deviceSize } from "../../responsive";



const BenefitCard = ({ title, word, image, alt }) => {
  return (
    <>
      <Marginer direction="vertical" margin={50} />
      <BenefitSectionContent>
        <div className="img-icon">
          <img src={image} alt={alt} />
        </div>

        <div className="text-content">
          <h3 className="header-content">{title}</h3>
          <p className="word-text">{word}</p>
        </div>
      </BenefitSectionContent>
    </>
  );
};

const BenefitSectionContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  .img-icon {
    width: ${({ size }) => (size ? size + "px" : "78px")};
    height: ${({ size }) => (size ? size + "px" : "66px")};
    margin-right: 30px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .text-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: space-evenly;
  }

  .header-content {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    margin: 0;
    padding: 0;
  }

  .word-text {
    font-style: normal;
    font-size: 16px;
    margin: 0;
    padding: 0;
    text-align: left;
    line-height: 26px;
  }

  @media screen and (max-width: 786px) {
    flex-direction: column;

    .text-content {
      align-items: center;
      width: 60%;
      margin: 0 auto;
    }

    .header-content {
      margin: 1rem 0;
    }

    .word-text {
      text-align: center;
    }
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column;
  }
`;

export default BenefitCard;
