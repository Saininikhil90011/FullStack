import React from 'react'

function FooterSection() {
  return (
    <>
     <footer className="footer-section bg-title fix">
          <div className="footer-widgets-wrapper">
            <div className="shape1 float-bob-y d-none d-xxl-block">
              <img src="assets/img/shape/footerShape1_1.png" alt="shape" />
            </div>
            <div className="shape2 d-none d-xxl-block">
              <img src="assets/img/shape/footerShape1_2.png" alt="shape" />
            </div>
            <div className="shape3 d-none d-xxl-block">
              <img src="assets/img/shape/footerShape1_3.png" alt="shape" />
            </div>
            <div className="shape4  d-none d-xxl-block">
              <img src="assets/img/shape/footerShape1_4.png" alt="shape" />
            </div>
            <div className="container">
              <div className="footer-top">
                <div className="row gy-4">
                  <div className="col-lg-4">
                    <div className="fancy-box">
                      <div className="item1">
                        <i className="fa-solid fa-location-dot" />
                      </div>
                      <div className="item2">
                        <h6>address</h6>
                        <p>4648 Rocky Road Philadelphia </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                    <div className="fancy-box">
                      <div className="item1">
                        <i className="fa-solid fa-envelope" />
                      </div>
                      <div className="item2">
                        <h6>send email</h6>
                        <p>info@exmple.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                    <div className="fancy-box">
                      <div className="item1">
                        <i className="fa-regular fa-phone-volume" />
                      </div>
                      <div className="item2">
                        <h6>call emergency</h6>
                        <p>+88 0123 654 99</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="single-footer-widget">
                    <div className="widget-head">
                      <a href="index.html">
                        <img
                          src="assets/img/logo/logoWhite.svg"
                          alt="logo-img"
                        />
                      </a>
                    </div>
                    <div className="footer-content">
                      <p>
                        Phasellus ultricies aliquam volutpat ullamcorper laoreet
                        neque, a lacinia curabitur lacinia mollis
                      </p>
                      <div className="social-icon d-flex align-items-center">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-youtube" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="single-footer-widget">
                    <div className="widget-head">
                      <h3>Quick Links</h3>
                    </div>
                    <ul className="list-area">
                      <li>
                        <a href="about.html">
                          <i className="fa-solid fa-chevrons-right" />
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="gallery.html">
                          <i className="fa-solid fa-chevrons-right" />
                          Our Gallery
                        </a>
                      </li>
                      <li>
                        <a href="blog.html">
                          <i className="fa-solid fa-chevrons-right" />
                          Our Blogs
                        </a>
                      </li>
                      <li>
                        <a href="faq.html">
                          <i className="fa-solid fa-chevrons-right" />
                          FAQ’S
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">
                          <i className="fa-solid fa-chevrons-right" />
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="single-footer-widget">
                    <div className="widget-head">
                      <h3>Our Menu</h3>
                    </div>
                    <ul className="list-area">
                      <li>
                        <a href="menu.html">
                          <i className="fa-solid fa-chevrons-right" />
                          Burger King
                        </a>
                      </li>
                      <li>
                        <a href="menu.html">
                          <i className="fa-solid fa-chevrons-right" />
                          Pizza king
                        </a>
                      </li>
                      <li>
                        <a href="menu.html">
                          <i className="fa-solid fa-chevrons-right" />
                          Fresh Food
                        </a>
                      </li>
                      <li>
                        <a href="menu.html">
                          <i className="fa-solid fa-chevrons-right" />
                          Vegetable
                        </a>
                      </li>
                      <li>
                        <a href="menu.html">
                          <i className="fa-solid fa-chevrons-right" />
                          Desserts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="single-footer-widget">
                    <div className="widget-head">
                      <h3>Contact Us</h3>
                    </div>
                    <ul className="list-area">
                      <li className="mb-2">
                        Monday – Friday:{" "}
                        <span className="text-theme-color2"> 8am – 4pm </span>
                      </li>
                      <li>
                        Saturday:{" "}
                        <span className="text-theme-color2"> 8am – 12am </span>
                      </li>
                    </ul>
                    <form action="#" className="mt-4">
                      <div className="form-control">
                        <input
                          className="email"
                          type="email"
                          placeholder="Your email address"
                        />
                        <button type="submit" className="submit-btn">
                          <i className="fa-solid fa-arrow-right-long" />
                        </button>
                      </div>
                      <div className="form-control style2 mt-3">
                        <input id="checkbox" name="checkbox" type="checkbox" />
                        <label htmlFor="checkbox">
                          I agree to the{" "}
                          <a href="contact.html">Privacy Policy.</a>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-wrapper d-flex align-items-center justify-content-between">
                <p className="wow fadeInLeft" data-wow-delay=".3s">
                  © All Copyright 2024 by <a href="index.html">FreshEat</a>
                </p>
                <ul className="brand-logo wow fadeInRight" data-wow-delay=".5s">
                  <li>
                    <a className="text-white" href="contact.html">
                      Terms &amp; Condition
                    </a>
                  </li>
                  <li>
                    <a className="text-white" href="contact.html">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default FooterSection