import React from 'react'

function Disital() {
  return (
    <>

<section className="bg-color  p-5rem ">
        <div className="container">
          <div className="row mb-5">
            {/* -section iamge */}
            <div className="col-12 col-md-12 col-lg-6 img-section">
              <figure>
                <img
                  src="./images/product01.gif"
                  alt="desital product"
                  className="img-fluid"
                />
              </figure>
            </div>
            <div className="col-12 col-md-12 col-lg-6 mt-5 mb-5 flex-column justify-content-center align-items-start">
              <h2 className="text-capitalize fw-bolder text-white mt-5rem">
                Step to Build a <br />
                Successful Digital Product
              </h2>
              <p className="mt-3 mb-5 para-width text-light-gray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique ipsam temporibus deleniti est placeat explicabo, iure
                neque reiciendis repellendus! Quas sunt voluptate aliquam
                corrupti possimus minus, nobis odio voluptatum consequatur!
              </p>
              <div className="text-center w-100 text-md-start">
                <button className="text-capitalize btn btn-primary px-5 py-2">
                  <u
                    className="text-decoration-none"
                    data-bs-toggle="tooltip"
                    data-bs-title="Contact Us"
                  >
                    Contact Us
                  </u>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Disital