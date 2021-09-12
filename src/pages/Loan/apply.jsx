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
              <div class="mb-3">
                <label for="account-name" class="form-label">
                  Account Name
                </label>
                <input type="number" class="form-control" id="account-name" />
              </div>
              <div class="mb-3">
                <label for="bank-name" class="form-label">
                  Bank Name
                </label>
                <input type="text" class="form-control" id="bank-name" />
              </div>
              <div class="mb-3">
                <label for="bvn" class="form-label">
                  Bvn
                </label>
                <input type="number" class="form-control" id="bvn" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Employment Status
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Choose a Status</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </form>
          </div>
          <div className="col-sm-6 order-md-2 apply-right">
            <form>
              <div class="mb-3">
                <label for="account-number" class="form-label">
                  Account Number
                </label>
                <input type="number" class="form-control" id="account-number" />
              </div>
              <div class="mb-3">
                <label for="Loan-amount" class="form-label">
                  Loan Amount
                </label>
                <input type="number" class="form-control" id="Loan-amount" />
              </div>
              <div class="mb-3">
                <label for="repayment-period" class="form-label">
                  Repayment Period
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Choose a Repayment Period</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="reason" class="form-label">
                  Reason for Loan
                </label>
                <input type="text" class="form-control" id="reason" />
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
              <div class="mb-3">
                <label for="guarantor-fullname" class="form-label">
                  Guarantor Fullname (1)
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="guarantor-fullname"
                />
              </div>
              <div class="mb-3">
                <label for="guarantor-fullname2" class="form-label">
                  Guarantor Fullname (2)
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="guarantor-fullname2"
                />
              </div>
            </form>
          </div>
          <div className="col-sm-6 order-md-2 apply-right">
            <form>
              <div class="mb-3">
                <label for="guarantor" class="form-label">
                  Guarantor Association Number (1)
                </label>
                <input type="number" class="form-control" id="guarantor" />
              </div>
              <div class="mb-3">
                <label for="guarantor2" class="form-label">
                  Guarantor Association Number (2)
                </label>
                <input type="number" class="form-control" id="guarantor2" />
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
