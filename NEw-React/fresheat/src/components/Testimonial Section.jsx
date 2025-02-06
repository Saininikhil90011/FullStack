import React from 'react'

function TestimonialSection() {
  return (
    <div>

<section className="testimonial-section fix bg-color3">
          <div className="testimonial-wrapper style1 section-padding ">
            <div className="shape">
              <img
                src="assets/img/testimonial/testimonialThumb1_1.png"
                alt="thumb"
              />
            </div>
            <div className="shape2">
              <img src="assets/img/shape/testimonialShape1_1.png" alt="shape" />
            </div>
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-xl-5 d-flex align-items-center justify-content-center">
                  <div className="video-wrap cir36 ">
                    <a
                      href="https://www.youtube.com/watch?v=f2Gzr8sAGB8"
                      className="play-btn popup-video"
                    >
                      <img src="assets/img/shape/player.svg" alt="icon" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-7">
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
                      Testimonials
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
                      What our Clients Say
                    </h2>
                  </div>
                  <div className="slider-area">
                    <div className="swiper testmonialSliderOne">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="testimonial-card style1">
                            <div className="testimonial-header">
                              <div className="fancy-box">
                                <div className="item1">
                                  <img
                                    src="assets/img/testimonial/testimonialProfile1_1.png"
                                    alt="thumb"
                                  />
                                </div>
                                <div className="item2">
                                  <h6>Albert Flores</h6>
                                  <p>Web Designer</p>
                                  <div className="icon">
                                    <img
                                      src="assets/img/icon/star.svg"
                                      alt="icon"
                                    />
                                  </div>
                                </div>
                                <div className="quote">
                                  <img
                                    src="assets/img/icon/quote.svg"
                                    alt="icon"
                                  />
                                </div>
                              </div>
                            </div>
                            <p>
                              Penatibus magnis dis point parturient montes
                              nascetur ridiculus mus Ut id lorem ac enim the
                              vestibulum blandit nec sit amet felis. Fusce quis
                              diam odio Cras mattis mi quis tincidunt
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-wrap">
              <div className="arrow-prev">
                <i className="fa-regular fa-arrow-left" />
              </div>
              <div className="arrow-next">
                <i className="fa-regular fa-arrow-right" />
              </div>
            </div>
          </div>
          <div className="marquee-wrapper style-2 text-slider section-padding">
            <div className="marquee-inner to-left">
              <ul className="marqee-list d-flex">
                <li className="marquee-item style-2">
                  <span className="text-slider" />
                  <span className="text-slider text-style">chicken pizza</span>
                  <span className="text-slider" />
                  <span className="text-slider text-style">
                    GRILLED CHICKEN
                  </span>
                  <span className="text-slider" />
                  <span className="text-slider text-style">BURGER</span>
                  <span className="text-slider" />
                  <span className="text-slider text-style">CHICKEN PIZZA</span>
                  <span className="text-slider" />
                  <span className="text-slider text-style">FRESH PASTA</span>
                  <span className="text-slider" />
                  <span className="text-slider text-style">
                    ITALIANO FRENCH FRY
                  </span>
                  <span className="text-slider" />
                  <span className="text-slider text-style">CHICKEN FRY</span>
                  <span className="text-slider" />
                  <span className="text-slider text-style">chicken pizza</span>
                  <span className="text-slider" />
                  <span className="text-slider text-style">
                    GRILLED CHICKEN
                  </span>
                  <span className="text-slider" />
                  <span className="text-slider text-style">BURGER</span>
                  <span className="text-slider" />
                  <span className="text-slider text-style">CHICKEN PIZZA</span>
                  <span className="text-slider" />
                  <span className="text-slider text-style">FRESH PASTA</span>
                  <span className="text-slider" />
                  <span className="text-slider text-style">
                    ITALIANO FRENCH FRY
                  </span>
                  <span className="text-slider" />
                  <span className="text-slider text-style">CHICKEN FRY</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </div>
  )
}

export default TestimonialSection