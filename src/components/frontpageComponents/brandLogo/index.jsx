import React from "react";
import styled from "styled-components";
import { deviceSize } from "../../responsive";



const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width:${deviceSize.mobile}px){
    justify-content: center;
  }

`;

const LogoImage = styled.div`
  /* width: ${({ size }) => (size ? size + "px" : "144px")};
  height: ${({ size }) => (size ? size + "px" : "26px")}; */

  width: ${({ size }) => (size ? size + "px" : "100px")};
  height: ${({ size }) => (size ? size + "px" : "16px")};
  margin-top: -10px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export function BrandLogo(props) {
  const { LogoSize } = props;
  return (
    <BrandLogoContainer>
      <LogoImage size={LogoSize}>
        <img src="./images/logo/tentenLogo.png" alt="Ten Ten Logo" />
      </LogoImage>
    </BrandLogoContainer>
  );
}
