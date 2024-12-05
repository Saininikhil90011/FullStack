export default function AddressInformation() {
    return (
      <>
        <div className="container mt-5">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5>Address Information</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="PinCode" className="form-label">
                      Pin Code:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="pinCode"
                      placeholder="Enter Pin Code"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="flatDoorBuilding" className="form-label">
                      Flat/Door/Building:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="flatDoorBuilding"
                      placeholder=" "
                    />
                  </div>
                </div>
  
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="building/village" className="form-label">
                      Building/Village:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="buildingVillage"
                      placeholder=" "
                    />
                  </div>
  
                  <div className="col-md-6">
                    <label htmlFor="road" className="form-label">
                      Road:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="road"
                      placeholder=" "
                    />
                  </div>
                </div>
  
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="area" className="form-label">
                      Area:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="area"
                      placeholder=" "
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      htmlFor="selectEmployerCategory"
                      className="form-label"
                    >
                      Employer Category:
                    </label>
                    <select className="form-select" id="selectEmployerCategory">
                      <option defaultValue>Select Employer Category</option>
                      <option value="govt">Govt</option>
                      <option value="private">Private</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
  
                <div className="d-flex justify-content-between  ">
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