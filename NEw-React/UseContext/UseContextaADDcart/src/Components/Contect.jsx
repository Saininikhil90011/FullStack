import React from 'react'

function Contect() {
  return (
    <>
              <section
        className="comman-section contect-section text-white pt-5 bg-color"
        id="Online-contect"
      >
        <div className="custom-shape-divider-top-1734167208">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            />
          </svg>
        </div>
        <div className="container text-center common-title fw-bold">
          <h2 className="commn-heading text-white">Contect Us</h2>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="form-section mx-auto">
            <form>
              <div className="mb-3">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <label
                      htmlFor="exampleFormUsserFirstName"
                      className="form-label"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      required=""
                      className="form-control"
                      id="exampleFormFirstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <label
                      htmlFor="exampleFormUsserLastName"
                      className="form-label"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormLastNam"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contect