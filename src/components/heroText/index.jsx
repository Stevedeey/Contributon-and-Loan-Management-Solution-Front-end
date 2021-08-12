import styled from "styled-components";

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width:40%;
`;

const HeroTitle = styled.h2`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 4.5em;
  line-height: 1.4;
  color: #fff;
  font-feature-settings: "salt" on, "liga" off;
  text-align: left;
`;

const SloganText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.2em;
  line-height: 1.6;
  color: #fff;
  text-align: left;
`;

export function HeroTextContainer(props) {
  return (
    <HeroText>
      <HeroTitle>Get loans easily at the low Interests</HeroTitle>
      <SloganText>
        Our solution gives you easy Access to Loans at low Interests and also
        facilitates a smooth loan process operation
      </SloganText>
    </HeroText>
  );
}
