export default function OtherSourceIncome() {
    return (
      <>
        <div className="container mt-5">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5>Other Sources of Income</h5>
            </div>
            <div className="card-body">
              <form>
                {/* Question 1 */}
                <div className="mb-3">
                  <label className="form-label">
                    Earning income from interests?
                  </label>
                  <div>
                    <button type="button" className="btn btn-outline-danger me-2">
                      No
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      Yes
                    </button>
                  </div>
                </div>
                {/* Question 2 */}
                <div className="mb-3">
                  <label className="form-label">
                    Do you have Dividend Income?
                  </label>
                  <div>
                    <button type="button" className="btn btn-outline-danger me-2">
                      No
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      Yes
                    </button>
                  </div>
                </div>
                {/* Question 3 */}
                <div className="mb-3">
                  <label className="form-label">Any Other Income?</label>
                  <div>
                    <button type="button" className="btn btn-outline-danger me-2">
                      No
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      Yes
                    </button>
                  </div>
                </div>
                {/* Question 4 */}
                <div className="mb-3">
                  <label className="form-label">
                    Do you have any family pension income?
                  </label>
                  <div>
                    <button type="button" className="btn btn-outline-danger me-2">
                      No
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      Yes
                    </button>
                  </div>
                </div>
                {/* Question 5 */}
                <div className="mb-3">
                  <label className="form-label">
                    Do you have any income from other sources (Exempt from Tax)?
                  </label>
                  <div>
                    <button type="button" className="btn btn-outline-danger me-2">
                      No
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      Yes
                    </button>
                  </div>
                </div>
                {/* Navigation Buttons */}
                <div className="d-flex justify-content-between">
                  <button type="button" className="btn btn-primary text-uppercase">
                    Previous
                  </button>
                  <button type="button" className="btn btn-primary text-uppercase">
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