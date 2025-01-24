export default function BankDelails() {
    return (
      <>
        <div className="container mt-5">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5>Bank Details</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="bankName" className="form-label">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bankName"
                      placeholder="Enter Bank Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="accountNumber" className="form-label">
                      Account Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="accountNumber"
                      placeholder="Enter Account Number"
                    />
                  </div>
                </div>
  
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="ifscCode" className="form-label">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ifscCode"
                      placeholder="Enter IFSC Code"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="branch" className="form-label">
                      Branch
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="branch"
                      placeholder="Enter Branch"
                    />
                  </div>
                </div>
  
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="accountType" className="form-label">
                      Account Type
                    </label>
                    <select className="form-select" id="accountType">
                      <option defaultValue>Select Account Type</option>
                      <option value="savings">Savings</option>
                      <option value="current">Current</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="micrCode" className="form-label">
                      MICR Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="micrCode"
                      placeholder="Enter MICR Code"
                    />
                  </div>
                </div>
  
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn btn-primary"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="btn btn btn-primary"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }