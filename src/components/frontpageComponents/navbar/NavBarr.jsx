// import React, { useState } from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import "../../../style/components/navbar.css";
import { useState } from "react";

const NavContainer = styled.nav`
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
  const [toggle, setToggle] = useState(true);

  return (
    <div className="fixAtop">
      <NavContainer className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid " id="foo">
          <LogoSection>
            <BrandLogo />
          </LogoSection>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setToggle((prev) => !prev)}
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarScroll"
            // aria-controls="navbarScroll"
            // aria-expanded="false"
            // aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={toggle ? "collapse navbar-collapse" : "navbar-collapse"}
            id="navbarScroll"
          >
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
    </div>
  );
}

// export default NavBarr;
