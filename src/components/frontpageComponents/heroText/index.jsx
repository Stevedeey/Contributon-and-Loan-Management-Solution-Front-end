import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Marginer } from "../../marginer";
import { Button } from "../button";

import { deviceSize } from "../../responsive";

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    display: flex;
    width: 80%;

    align-content: center;
    text-align: center;
  }

  @media screen and (max-width: ${deviceSize.tablet}px) {
    display: flex;
    width: 80%;
    align-content: center;
    text-align: center;
  }

  @media screen and (max-width: 1132px) {
    padding: 0 15px;
  }
`;

const HeroTitle = styled.h2`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: ${({ f_size }) => (f_size ? f_size : "4.5em")};
  line-height: 1.4;
  color: #fff;
  font-feature-settings: "salt" on, "liga" off;
  text-align: left;

  @media screen and (max-width: 1132px) {
    font-size: 3.2em;
  }
`;

const SloganText = styled.p`
 
  font-weight: 600;
  font-style: normal;
  font-size: 1.2em;
  line-height: 1.6;
  color: #fff;
  text-align: left;
`;

const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    display: flex;
    width: 100%;
    align-content: center;
    text-align: center;
  }
  @media screen and (max-width: 1150px) {
    display: flex;
    width: 100%;
    align-content: center;
    text-align: center;
  }
`;

export function HeroTextContainer(props) {
  const { f_size } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <HeroText>
      <HeroTitle f_size={isMobile ? "2.5em" : f_size}>
        Get loans easily at the low Interests
      </HeroTitle>
      <Marginer direction="vertical" margin={5} />
      <SloganText>
        Our solution gives you easy Access to Loans at low Interests and also
        facilitates a smooth loan process operation
      </SloganText>
      <Marginer direction="vertical" margin={10} />
      <ButtonContainer>
        <Button>Get started</Button>
        <Button btnbkgColor={"#F1E4FF"} btnFgColor={"#8c30f5"} wth="">
          Get the app
        </Button>
      </ButtonContainer>
    </HeroText>
  );
}
