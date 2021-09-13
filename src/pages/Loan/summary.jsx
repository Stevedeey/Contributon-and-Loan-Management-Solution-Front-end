import React from "react";

function Summary() {
  return (
    <div>
      <div className="head-title">Apply for a Loan</div>
      <div className="main-body summary">
        <div className="summary-box">
          <div className="apply-summary">Your Loan Application Summary</div>
          <div className="pay-summary">Your Monthly Payment</div>
          <div className="amount-summary">10,000</div>
          <div className="info-summary">
            <div>Total Repayment : 34,000</div>
            <div>Repayment Period : 3 Months</div>
          </div>

          <div className="base-summary">
            <div class="checkbox">
              <input type="checkbox" />
            </div>
            <div>
              I have read the important information and accept that by <br />
              completing the application I will be bound by the terms
            </div>
          </div>
          <button className="btn btn-default summary-submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
