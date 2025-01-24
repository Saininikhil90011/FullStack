export default function Deductions() {
    return (
      <>
        <div className="container mt-5">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5>Deductions</h5>
            </div>
            <div className="card-body">
              {/* Navigation Tabs */}
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button className="nav-link " type="button">
                    Section 80C
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" type="button">
                    Section 80D
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link active" type="button">
                    Donation
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" type="button">
                    Other
                  </button>
                </li>
              </ul>
  
              {/* Form Section */}
              <div className="mt-4">
                {/* Specify Other Deductions */}
                <div className="mb-3">
                  <label className="form-label">Specify if any other</label>
                  <select className="form-select">
                    <option value="">Please Select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Amount</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Amount"
                  />
                </div>
                <button type="button" className="btn btn-success">
                  <i className="bi bi-plus"></i> Add
                </button>
              </div>
  
              {/* Section 80DD/80U */}
              <div className="mt-5">
                <h6>Section 80DD / 80U</h6>
                <div className="mb-3">
                  <label className="form-label">Disabled Member</label>
                  <select className="form-select">
                    <option value="">Please Select Member</option>
                    <option value="member1">Member 1</option>
                    <option value="member2">Member 2</option>
                  </select>
                </div>
              </div>
  
              {/* Section 80DDB */}
              <div className="mt-4">
                <h6>Section 80DDB</h6>
                <div className="mb-3">
                  <label className="form-label">Diseased Citizen</label>
                  <select className="form-select">
                    <option value="">Please Select Member</option>
                    <option value="member1">Member 1</option>
                    <option value="member2">Member 2</option>
                  </select>
                </div>
              </div>
  
              <div className="mt-4">
                <h6>Section 80GG</h6>
                <div className="mb-3">
                  <label className="form-label">Rent Paid for the Year</label>
                  <input type="number" className="form-control" placeholder="0" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Number of Months Rent Paid</label>
                  <input type="number" className="form-control" placeholder="0" />
                </div>
              </div>
  
              {/* Section 80TTA/80TTB */}
              <div className="mt-4">
                <h6>Section 80TTA/80TTB</h6>
                <p className="text-muted">
                  Note: Under Section 80TTA/80TTB, you get a deduction on your
                  savings bank interest, which the system auto-considers while
                  computing your taxable income.
                </p>
              </div>
  
              {/* Navigation Buttons */}
              <div className="d-flex justify-content-between mt-4">
                <button type="button" className="btn btn-primary text-uppercase">
                  Previous
                </button>
                <button type="button" className="btn  btn-primary text-uppercase">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }