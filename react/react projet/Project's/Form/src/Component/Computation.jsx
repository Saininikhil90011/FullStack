export default function Computation() {
    return (
      <>
        <div className="container mt-5">
          <div className="card">
            <div className="card-header">
              <h5>Which regime have you selected for FY 2023-24?</h5>
            </div>
            <div className="card-body text-center">
              <p className="mb-3">
                Basis your inputs, your recommended regime is
              </p>
              <div className="d-flex justify-content-center">
                <label className="btn btn-outline-primary mx-2">
                  <input
                    type="radio"
                    name="regime"
                    // value="New"
                  />
                  New
                </label>
                <label className="btn btn-outline-primary mx-2">
                  <input
                    type="radio"
                    name="regime"
                    // value="Old"
                  />
                  Old
                </label>
              </div>
              <button className="btn btn-primary mt-3">Calculate</button>
            </div>
            <div className="card-footer text-end">
              <button className="btn btn-primary mx-2 text-uppercase">Previous</button>
              <button className="btn btn-primary text-uppercase">Finish</button>
            </div>
          </div>
        </div>
      </>
    );
  }