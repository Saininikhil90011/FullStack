export default function FinancialDetails() {
    return (
      <>
        <div className="container mt-5">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5>Financial Details</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="financialYear" className="form-label">
                      Financial Year
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="financialYear"
                      value="2024-2025"
                      readOnly
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="panNumber" className="form-label">
                      PAN Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="panNumber"
                      placeholder="Enter your PAN number"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="dob" className="form-label">
                      Date of Birth
                    </label>
                    <input type="date" className="form-control" id="dob" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="itrPassword" className="form-label">
                      ITR Portal Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="itrPassword"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
