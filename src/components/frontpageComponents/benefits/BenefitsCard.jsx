import React from 'react'
import styled from "styled-components";

const BenefitCard = ({title, word, image, alt}) => {
    return (
      <BenfitSectionContent>
        <BenfitSectionIcon>
          <img src={image} alt={alt} />
        </BenfitSectionIcon>

        <BenfitSectionIconTextBlock>
          <BenfitSectionIconTextBlockHeading>
            <h3>{title}</h3>
          </BenfitSectionIconTextBlockHeading>

          <BenfitSectionIconTextBlockParagraph>
            <p>{word}</p>
          </BenfitSectionIconTextBlockParagraph>
        </BenfitSectionIconTextBlock>
      </BenfitSectionContent>
    );
}

const BenfitSectionContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const BenfitSectionIcon = styled.div`
  width: ${({ size }) => (size ? size + "px" : "78px")};
  height: ${({ size }) => (size ? size + "px" : "70px")};
  margin-right: 30px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const BenfitSectionIconTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  align-content: space-evenly;
`;

const BenfitSectionIconTextBlockHeading = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  margin: 0;
  line-height: 0;
  padding: 0;
`;

const BenfitSectionIconTextBlockParagraph = styled.p`
  font-style: normal;
  font-size: 16px;
  margin: 0;
  padding: 0;
  text-align: left;
  line-height: 26px;
`;

export default BenefitCard; 
