import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  border-bottom: solid #ddd 2px;
  justify-content: space-around;
`;

const MenuItemSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
   
  p {
    color: #ddd;
    margin-right: 15px;
    color: #000;
    font-weight: 500;
    font-size: 14px;

  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: -70px;
`;

const AuthenticationSection = styled.div`
  display: flex;
  width: 13%;
  align-content: center;
  justify-content: space-evenly;

`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <MenuItemSection>
        <p>Home</p>
        <p>About</p>
        <p>Loan</p>
        <p>Contact</p>
        <p>FAQ</p>
      </MenuItemSection>

      <LogoSection>
        <BrandLogo />
      </LogoSection>

      <AuthenticationSection>
        <Button size={12} wth={"4.875em"} heit={"2.5em"}>
          Login
        </Button>
        <Button
          size={12}
          btnbkgColor={"#F1E4FF"}
          btnFgColor={"#8c30f5"}
          wth={"90px"}
          heit={"2.5em"}
          pad={"0px 5px"}
    
        >
          Sign up
        </Button>
      </AuthenticationSection>
    </NavbarContainer>
  );
}
