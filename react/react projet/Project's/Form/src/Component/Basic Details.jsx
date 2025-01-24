export default function BasicDetails() {
    return (
      <>
        <div className="container mt-5">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5>Basic Details</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="middleName" className="form-label">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="middleName"
                      placeholder="Middle Name"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
  
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="fathersName" className="form-label">
                      Father's Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fathersName"
                      placeholder="Father's Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="mobileNumber" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="mobileNumber"
                      placeholder="Mobile Number"
                      //   value="1234566789"
                    />
                  </div>
                </div>
  
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email ID
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email ID"
                      //   value="b4Ml9@example.com"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label d-block">Gender</label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                      />
                      <label className="form-check-label" htmlFor="male">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                      />
                      <label className="form-check-label" htmlFor="female">
                        Female
                      </label>
                    </div>
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