import React from "react";
import styled from "styled-components";

const ImageOfPerson = styled.div`
  width: 300px;
  height: 186px;
  margin-right: 100px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 43px;

  font-feature-settings: "salt" on, "liga" off;

  color: #18191f;
`;

const InvertedComma = styled.div`
  width: 50px;
  height: 40px;
  margin: 30px 0;
  img {
    width: 90%;
    height: 90%;
  }
`;

const Paragraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;

  font-feature-settings: "salt" on, "liga" off;

  color: #666666;
`;

const NamePlaceholder = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  font-feature-settings: "salt" on, "liga" off;
  margin-top: -10px;
`;

const ImageAndTextRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const ExperienceColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const NextPreviousButtons = styled.div`
  width: 52.82px;
  height: 14px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CunstomerExperienceCard = ({ para, namee, image, alt }) => {
  return (
    <CardWrapper>
      <ImageAndTextRow>
        <ImageOfPerson>
          <img src={image} alt={alt} />
        </ImageOfPerson>
        <ExperienceColumnWrapper>
          <Title>Experiences from Customers</Title>
          <InvertedComma>
            <img src="./images/homepageImages/invertedComma.png" alt="Inverted Comma" />
          </InvertedComma>
          <Paragraph>{para}</Paragraph>
          <NamePlaceholder>{namee}</NamePlaceholder>
          <NextPreviousButtons>
            <img src="./images/homepageImages/nextPrev.png" alt="Next Prev Button"/>
          </NextPreviousButtons>
        </ExperienceColumnWrapper>
      </ImageAndTextRow>
    </CardWrapper>
  );
};

export default CunstomerExperienceCard;
