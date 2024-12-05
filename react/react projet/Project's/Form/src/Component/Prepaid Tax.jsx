import React, { useState } from 'react'

            const PrepaidTax = () => {
  const [advanceTax, setAdvanceTax] = useState(false);
  const [tdsOther, setTdsOther] = useState(false);

  return (
    <div className="container mt-5 bg-light border-2 rounded p-4">

      <h2 className="mb-4">Prepaid Tax</h2>

      {/* Form Section */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Do you have a Form 26AS?</h5>
          <p><span className='fw-bold text-danger'>Upload Form 26AS</span> and avoid manual entry.</p>
          {/* <button className="btn btn-primary">Upload Form 26AS</button> */}
        </div>
      </div>

      {/* TDS on Salary Income */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">TDS on Salary Income</h5>
          <form>
            <div className="row mb-3">
              <div className="col-md-4">
                <label>Company / Employer Name</label>
                <input type="text" className="form-control" placeholder="Enter company name" />
              </div>
              <div className="col-md-4">
                <label>TAN of the Employer</label>
                <input type="text" className="form-control" placeholder="Enter TAN" />
              </div>
              <div className="col-md-2">
                <label>Salary / Pension Amount</label>
                <input type="number" className="form-control" placeholder="0" />
              </div>
              <div className="col-md-2">
                <label>Tax Amount</label>
                <input type="number" className="form-control" placeholder="0" />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Advance Tax and Self Assessment Tax Payment */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Advance Tax and Self Assessment Tax Payment</h5>
          <p>Add details of any tax paid directly to the government via Challan 280.</p>
          <div>
            <label className="me-3">
              <input
                type="radio"
                value="No"
                checked={!advanceTax}
                onChange={() => setAdvanceTax(false)}
              />{' '}
              No
            </label>
            <label>
              <input
                type="radio"
                value="Yes"
                checked={advanceTax}
                onChange={() => setAdvanceTax(true)}
              />{' '}
              Yes
            </label>
          </div>
        </div>
      </div>

      {/* Details of TDS Paid on Other Than Salary */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Details of TDS Paid on Other Than Salary</h5>
          <p>
            If you've had TDS deducted on any source of income except salary, like interest, rent,
            etc., then you can enter here. (Refer Form 16A or 26AS)
          </p>
          <div>
            <label className="me-3">
              <input
                type="radio"
                value="No"
                checked={!tdsOther}
                onChange={() => setTdsOther(false)}
              />{' '}
              No
            </label>
            <label>
              <input
                type="radio"
                value="Yes"
                checked={tdsOther}
                onChange={() => setTdsOther(true)}
              />{' '}
              Yes
            </label>
          </div>
        </div>
        
      </div>

      {/* Details of TDS Paid on Other Than Salary */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Details of TDS Paid on Rental Income</h5>
          <p>
            If you have rented out any property and the rent exceeds Rs.50,000 per month, you are liable to deduct 5% TDS on rent paid. Provide details of such deductions here.
          </p>
          <div>
            <label className="me-3 ">
              <input 
                type="radio"
                value="No"
                checked={!tdsOther}
                onChange={() => setTdsOther(false)}
              />{' '}
              No
            </label>
            <label>
              <input
                type="radio"
                value="Yes"
                checked={tdsOther}
                onChange={() => setTdsOther(true)}
              />{' '}
              Yes
            </label>
          </div>
        </div>
        
      </div>

      <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-primary text-uppercase">Previous</button>
            <button type="button" className="btn btn-primary text-uppercase">Next</button>
      </div>
    </div>

    )
}

export default PrepaidTax