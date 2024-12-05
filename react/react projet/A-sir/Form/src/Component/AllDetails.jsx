import React from "react";


function AllDetails() {
  return (
    <>
      <div>
        <nav className="navbar bg-body-blueviolet">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1 text-white fs-2 ms-2">Form</span>
          </div>
        </nav>  

        
        <div className="container d-flex cl-1  mt-3">
          <div className="bg-white p-4">
          <div className="TabCardGrid_TabsControl-sc-d3lyjf-2  cCikAR">
            <div className="TabCardGridTabControl-sc-d3lyjf-3 mt-4  duqXrA">Financial Details</div>
            <div className="TabCardGridTabControl-sc-d3lyjf-3 mt-4 duqXrA">Basic Details</div>
            <div className="TabCardGridTabControl-sc-d3lyjf-3 mt-4 duqXrA">Bank Details</div>
            <div className="TabCardGrid_TabControl-sc-d3lyjf-3 mt-4 duqXrA">Address Information</div>
            <div className="TabCardGridTabControl-sc-d3lyjf-3 mt-4 duqXrA">Other Sources of Income</div>
            <div className="TabCardGridTabControl-sc-d3lyjf-3 mt-4 duqXrA">Deductions</div>
            <div className="TabCardGridTabControl-sc-d3lyjf-3 mt-4 duqXrA">Prepaid Tax</div>
            <div className="TabCardGrid_TabControl-sc-d3lyjf-3 mt-4 duqXrA">Computation</div>
            </div>
          </div>

          <div className="page">
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
        

          </div>



        </div>
      </div>        
    </>
  );
}

export default AllDetails;
