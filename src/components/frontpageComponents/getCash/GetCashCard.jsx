import React from "react";
import styled from "styled-components";

const GetCashSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:25%;
  margin: 20px;
  padding: 20px;

`;

const GetCashIcon = styled.div`
  width: 72px;
  height: 72px;


  img {
    width: 100%;
    height: 100%;
  }
`;

const GetCashHeading = styled.h3`


  font-size: 24px;
  line-height: 32px;
  text-align: center;
  font-feature-settings: "salt" on, "liga" off;
`;

const GetCashParagraph = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  font-feature-settings: "salt" on, "liga" off;
`;

const GetCashCard = ({ image, heading, paragraph, alt }) => {
  return (
    <GetCashSectionContent>
      <GetCashIcon>
        <img src={image} alt={alt} />
      </GetCashIcon>

      <div>
        <GetCashHeading>
          <h3>{heading}</h3>
        </GetCashHeading>

        <GetCashParagraph>
          <p>{paragraph}</p>
        </GetCashParagraph>
      </div>
    </GetCashSectionContent>
  );
};

export default GetCashCard;
