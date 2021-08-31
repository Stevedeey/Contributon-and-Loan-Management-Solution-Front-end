import React from "react";
import styled from "styled-components";

import CustomerExperienceCard from "./CustomerExperienceCard";
import "./CustomerExperience.css";
import { deviceSize } from "../../responsive";
import { useMediaQuery } from "react-responsive";

const CustomerExperienceSectionWrapper = styled.div`
  width: 100%;
  background-color: #faf6ff;
  height: 529px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 100px 0;
    height: 729px;
  }
`;

export function CustomerExperienceSection() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <CustomerExperienceSectionWrapper>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-50px",
        }}
      >
        {!isMobile && (
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        )}

        <div className="carousel-inner">
          <div className="carousel-item active">
            <CustomerExperienceCard
              para={
                "This Platform is an amazing one, very easy to use, and they provide an excellent service"
              }
              namee={"Oluwatosin Olaleye"}
              image={"./images/homepageImages/testimonial.png"}
            ></CustomerExperienceCard>
          </div>

          <div className="carousel-item ">
            <CustomerExperienceCard
              para={
                "This Platform is an amazing one, very easy to use, and they privide an excellent service"
              }
              namee={"Kehinde Ojeola"}
              image={"./images/homepageImages/testimonial.png"}
            ></CustomerExperienceCard>
          </div>

          <div className="carousel-item ">
            <CustomerExperienceCard
              para={
                "This Platform is an amazing one, very easy to use, and they privide an excellent service"
              }
              namee={"Damilola Adenusi"}
              image={"./images/homepageImages/testimonial.png"}
            ></CustomerExperienceCard>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </CustomerExperienceSectionWrapper>
  );
}
