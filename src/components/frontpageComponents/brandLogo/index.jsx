import React from "react";
import styled from "styled-components";



const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;

`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "144px")};
  height: ${({ size }) => (size ? size + "px" : "26px")};

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
