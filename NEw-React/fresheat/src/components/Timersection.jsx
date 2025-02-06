import React from 'react'

function Timersection() {
  return (
    <>
     <div className="timer-section fix">
          <div className="timer-wrapper style1">
            <div className="container">
              <div className="timer-wrap style1">
                <div className="shape1 d-none d-xxl-block">
                  <img
                    className="cir36"
                    src="assets/img/shape/timerShape1_1.svg"
                    alt="shape"
                  />
                </div>
                <div className="shape2 d-none d-xxl-block">
                  <img src="assets/img/shape/timerShape1_2.svg" alt="shape" />
                </div>
                <div className="shape3 d-none d-xxl-block">
                  <img src="assets/img/shape/timerShape1_3.svg" alt="shape" />
                </div>
                <div className="container">
                  <div className="row gy-4 gx-134">
                    <div className="col-lg-6 d-flex align-items-center">
                      <div
                        className="timer-thumb wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <img
                          src="assets/img/timer/timerThumb1_1.png"
                          alt="thumb"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                      <div
                        className="timer-card style1 wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="title-area">
                          <div
                            className="sub-title text-center wow fadeInUp"
                            data-wow-delay="0.5s"
                          >
                            <img
                              className="me-1"
                              src="assets/img/icon/titleIcon.svg"
                              alt="icon"
                            />
                            Special Offer
                            <img
                              className="ms-1"
                              src="assets/img/icon/titleIcon.svg"
                              alt="icon"
                            />
                          </div>
                          <h2
                            className="title text-white wow fadeInUp"
                            data-wow-delay="0.7s"
                          >
                            Get 30% Discount Every Item
                          </h2>
                        </div>
                        <div className="clock-wrapper">
                          <div className="clock">
                            <div className="number" id="days">
                              00
                            </div>
                            <div className="text">days</div>
                          </div>
                          <div className="clock">
                            <div className="number" id="hours">
                              00
                            </div>
                            <div className="text">hrs</div>
                          </div>
                          <div className="clock">
                            <div className="number" id="minutes">
                              00
                            </div>
                            <div className="text">mins</div>
                          </div>
                          <div className="clock">
                            <div className="number" id="seconds">
                              00
                            </div>
                            <div className="text">secs</div>
                          </div>
                        </div>
                        <div className="btn-wrap">
                          <a className="theme-btn" href="menu.html">
                            ORDER NOW{" "}
                            <i className="fa-sharp fa-regular fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Timersection