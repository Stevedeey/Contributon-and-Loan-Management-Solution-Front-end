import React from "react";
import "../../style/loan.css";

function Apply() {
  return (
    <>
      {/* /* Title Head */}
      <div className="head-title">Apply for a Loan</div>
      {/* Main Body */}
      <div className="main-body">
        <div className="loan-app">Loan Application</div>
        <div className="row segment">
          <div className="col-sm-6 order-md-1 apply-left">
            <form>
              <div className="mb-3">
                <label htmlFor="account-name" className="form-label">
                  Account Name
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="account-name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bank-name" className="form-label">
                  Bank Name
                </label>
                <input type="text" className="form-control" id="bank-name" />
              </div>
              <div className="mb-3">
                <label htmlFor="bvn" className="form-label">
                  Bvn
                </label>
                <input type="number" className="form-control" id="bvn" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Employment Status
                </label>
                <select
                  defaultValue={"DEFAULT"}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="DEFAULT" disabled>
                    Choose a Status
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </form>
          </div>
          <div className="col-sm-6 order-md-2 apply-right">
            <form>
              <div className="mb-3">
                <label htmlFor="account-number" className="form-label">
                  Account Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="account-number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Loan-amount" className="form-label">
                  Loan Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Loan-amount"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="repayment-period" className="form-label">
                  Repayment Period
                </label>
                <select
                  defaultValue={"DEFAULT"}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="DEFAULT" disabled>
                    Choose a Repayment Period
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="reason" className="form-label">
                  Reason for Loan
                </label>
                <input type="text" className="form-control" id="reason" />
              </div>
            </form>
          </div>
        </div>
        <br />
        <div className="guarantor-section">Guarantor Section</div>
        <div className="quickinfo">
          Please know that your guarantors must be a Member of this
          Organization.
          <br /> Failure to comply means your Loan will be Rejected
        </div>
        <div className="row segment">
          <div className="col-sm-6 order-md-1 apply-left">
            <form>
              <div className="mb-3">
                <label htmlFor="guarantor-fullname" className="form-label">
                  Guarantor Fullname (1)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="guarantor-fullname"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="guarantor-fullname2" className="form-label">
                  Guarantor Fullname (2)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="guarantor-fullname2"
                />
              </div>
            </form>
          </div>
          <div className="col-sm-6 order-md-2 apply-right">
            <form>
              <div className="mb-3">
                <label htmlFor="guarantor" className="form-label">
                  Guarantor Association Number (1)
                </label>
                <input type="number" className="form-control" id="guarantor" />
              </div>
              <div className="mb-3">
                <label htmlFor="guarantor2" className="form-label">
                  Guarantor Association Number (2)
                </label>
                <input type="number" className="form-control" id="guarantor2" />
              </div>
            </form>
          </div>
        </div>
        <br />
        <div className="next">
          <button className="btn btn-default">Next</button>
        </div>
      </div>
    </>
  );
}

export default Apply;
