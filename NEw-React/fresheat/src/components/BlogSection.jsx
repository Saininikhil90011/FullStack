import React from 'react'

function BlogSection() {
  return (
    <>
      <section className="blog-section section-padding fix">
          <div className="burger-shape">
            <img src="assets/img/blog/burger-shape.png" alt="img" />
          </div>
          <div className="pizza-shape">
            <img src="assets/img/blog/pizza-shape.png" alt="img" />
          </div>
          <div className="blog-wrapper style1">
            <div className="container">
              <div className="blog-card-wrap style1">
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
                    LATEST NEWS
                    <img
                      className="ms-1"
                      src="assets/img/icon/titleIcon.svg"
                      alt="icon"
                    />
                  </div>
                  <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                    Our Latest Foods News
                  </h2>
                </div>
                <div className="slider-area">
                  <div className="swiper blogSliderOne">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div
                          className="blog-card style1 wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="blog-thumb">
                            <img
                              src="assets/img/blog/blogThumb1_1.jpg"
                              alt="thumb"
                            />
                          </div>
                          <div className="blog-content">
                            <div className="blog-meta">
                              <div className="item1">
                                <h6>15</h6>
                                <p>Dec</p>
                              </div>
                              <div className="item2">
                                <div className="icon">
                                  <img
                                    src="assets/img/icon/user.svg"
                                    alt="icon"
                                  />
                                  <span>By Admin</span>
                                </div>
                              </div>
                              <div className="item3">
                                <div className="icon">
                                  <img
                                    src="assets/img/icon/tag.svg"
                                    alt="icon"
                                  />
                                  <span>Noodles</span>
                                </div>
                              </div>
                            </div>
                            <a href="blog-details.html">
                              <h3>Fast Food Frenzy a Taste of Convenience</h3>
                            </a>
                            <a href="blog-details.html" className="link-btn">
                              <span>Read More</span>{" "}
                              <i className="fa-solid fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div
                          className="blog-card style1 wow fadeInUp"
                          data-wow-delay="0.4s"
                        >
                          <div className="blog-thumb">
                            <img
                              src="assets/img/blog/blogThumb1_2.jpg"
                              alt="thumb"
                            />
                          </div>
                          <div className="blog-content">
                            <div className="blog-meta">
                              <div className="item1">
                                <h6>17</h6>
                                <p>Dec</p>
                              </div>
                              <div className="item2">
                                <div className="icon">
                                  <img
                                    src="assets/img/icon/user.svg"
                                    alt="icon"
                                  />
                                  <span>By Admin</span>
                                </div>
                              </div>
                              <div className="item3">
                                <div className="icon">
                                  <img
                                    src="assets/img/icon/tag.svg"
                                    alt="icon"
                                  />
                                  <span>Chicken</span>
                                </div>
                              </div>
                            </div>
                            <a href="blog-details.html">
                              <h3>Benefits of health and safety measures</h3>
                            </a>
                            <a href="blog-details.html" className="link-btn">
                              <span>Read More</span>{" "}
                              <i className="fa-solid fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div
                          className="blog-card style1 wow fadeInUp"
                          data-wow-delay="0.6s"
                        >
                          <div className="blog-thumb">
                            <img
                              src="assets/img/blog/blogThumb1_3.jpg"
                              alt="thumb"
                            />
                          </div>
                          <div className="blog-content">
                            <div className="blog-meta">
                              <div className="item1">
                                <h6>25</h6>
                                <p>Dec</p>
                              </div>
                              <div className="item2">
                                <div className="icon">
                                  <img
                                    src="assets/img/icon/user.svg"
                                    alt="icon"
                                  />
                                  <span>By Admin</span>
                                </div>
                              </div>
                              <div className="item3">
                                <div className="icon">
                                  <img
                                    src="assets/img/icon/tag.svg"
                                    alt="icon"
                                  />
                                  <span>Noodles</span>
                                </div>
                              </div>
                            </div>
                            <a href="blog-details.html">
                              <h3>
                                Quick Cravings Unraveling Fast Food Delights
                              </h3>
                            </a>
                            <a href="blog-details.html" className="link-btn">
                              <span>Read More</span>{" "}
                              <i className="fa-solid fa-arrow-right-long" />
                            </a>
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
        </section>
    
    </>
  )
}

export default BlogSection