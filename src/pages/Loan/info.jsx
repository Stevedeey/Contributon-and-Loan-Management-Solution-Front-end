import React from "react";
import "../../style/loan.css";
import sideImg from "../../images/doodle.png";

function Info() {
  return (
    <div>
      <div className="head-title ">Apply for loan</div>
      <div className="container initiate">
        <div className="row loan">
          <div className="col-sm-6 order-md-2 background-right">
            <div className="container right-container">
              <img src={sideImg} width="110%" height="100%" alt="" />
            </div>
          </div>
          <div className="col-sm-6 order-md-1 background-left">
            <div className="container left-container">
              <div className="header-title">
                <h2>You are Almost </h2>
                <h2>there !!!</h2>
              </div>
              <br />
              <div className="loan-info">
                Here is the breakdown of your loan application, you are
                obligated to fufill this Contract
              </div>
              <div className="terms">
                <div className="terms-amount">
                  <p>Loan Amount</p>
                  <p>20,000</p>
                </div>
                <div className="terms-amount2">
                  <p>Loan Term</p>
                  <p>3 Months</p>
                </div>
              </div>
              <br />
              <p>Interest rate per Month</p>
              <p className="percent">8%</p>
              <div className="buttons">
                <button className="btn btn-default">Back</button>
                <button className="btn btn-default">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
