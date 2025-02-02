import React from "react";

function Hero() {
  return (
    <>
      <section className="bg-main bg-color hero-section" id="Online-hero">
        <div className="container">
          <div className="row mb-5">
            <div className=" mt-5 mt-lg-0  text-center text-lg-start order-lg-0 order-1 col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
              <h1 className="text-capitalize fw-bolder text-white">
                We Colleect Quality Leads
              </h1>
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
            {/* hero-section iamge */}
            <div className="col-12 col-md-12 col-lg-6  order-lg-1 order-0">
              <div className="text-center text-lg-end">
                <video
                  src="./public/images/hero-section-video.mp4"
                  loop=""
                  autoPlay=""
                  muted=""
                  className="hero-section-video"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1733686943">
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
      </section>
    </>
  );
}

export default Hero;
