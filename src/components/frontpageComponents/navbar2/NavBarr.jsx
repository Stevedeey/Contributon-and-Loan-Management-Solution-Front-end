// import React, { useState } from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";

const NavContainer = styled.nav`
  /* #show{
    height:120px;
    display:block;
} */
  /* width: 100%;
  height: 100px;
  background-color: black; */
  /* .container-fluid {
    display: flex !important;
    flex-direction: column;
    justify-content: space-between !important;
  } */
  .auth-button-container {
    margin-right: 10px;
    width: 19%;
    justify-content: space-evenly;

    @media screen and (max-width: 992px) {
      width: 20%;
      justify-content: space-between;
    }

    @media screen and (max-width: 784px) {
      width: 24%;
      justify-content: space-between;
    }
    @media screen and (max-width: 661px) {
      width: 28%;
      justify-content: space-between;
    }
    @media screen and (max-width: 661px) {
      width: 30%;
      justify-content: space-between;
    }

    @media screen and (max-width: 539px) {
      width: 34%;
      justify-content: space-between;
    }
    @media screen and (max-width: 480px) {
      width: 36%;
      justify-content: space-between;
    }
    @media screen and (max-width: 443px) {
      width: 40%;
      justify-content: space-between;
    }

    @media screen and (max-width: 400px) {
      flex-flow: column wrap;
    }
  }
  .none#ban {
    display: none !important;
  }
  .nav-link {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif !important;
  }
`;

const LogoSection = styled.div`
  margin-right: 5px;
`;

export function NavBarr() {
  //   const [state, setState] = useState(false);

  return (
    <NavContainer className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid" id="foo">
        {/* <a className="navbar-brand" href="e">
          Navbar scroll
        </a> */}
        <LogoSection>
          <BrandLogo />
        </LogoSection>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="e">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="e">
                Loan
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="e">
                Contact
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="e">
                FAQ
              </a>
            </li>
          </ul>
          <div className="d-flex auth-button-container">
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
          </div>

          {/* </form> */}
        </div>
      </div>
    </NavContainer>
  );
}

// export default NavBarr;
