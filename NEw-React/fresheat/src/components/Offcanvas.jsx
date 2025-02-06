import React from 'react'

function Offcanvas() {
  return (
    <>
     <div className="fix-area">
          <div className="offcanvas__info">
            <div className="offcanvas__wrapper">
              <div className="offcanvas__content">
                <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                  <div className="offcanvas__logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.svg" alt="logo-img" />
                    </a>
                  </div>
                  <div className="offcanvas__close">
                    <button>
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <p className="text d-none d-lg-block">
                  This involves interactions between a business and its
                  customers. It's about meeting customers' needs and resolving
                  their problems. Effective customer service is crucial.
                </p>
                <div className="offcanvas-gallery-area d-none d-xl-block">
                  <div className="offcanvas-gallery-items">
                    <a
                      href="assets/img/header/01.jpg"
                      className="offcanvas-image img-popup"
                    >
                      <img src="assets/img/header/01.jpg" alt="gallery-img" />
                    </a>
                    <a
                      href="assets/img/header/02.jpg"
                      className="offcanvas-image img-popup"
                    >
                      <img src="assets/img/header/02.jpg" alt="gallery-img" />
                    </a>
                    <a
                      href="assets/img/header/03.jpg"
                      className="offcanvas-image img-popup"
                    >
                      <img src="assets/img/header/03.jpg" alt="gallery-img" />
                    </a>
                  </div>
                  <div className="offcanvas-gallery-items">
                    <a
                      href="assets/img/header/04.jpg"
                      className="offcanvas-image img-popup"
                    >
                      <img src="assets/img/header/04.jpg" alt="gallery-img" />
                    </a>
                    <a
                      href="assets/img/header/05.jpg"
                      className="offcanvas-image img-popup"
                    >
                      <img src="assets/img/header/05.jpg" alt="gallery-img" />
                    </a>
                    <a
                      href="assets/img/header/06.jpg"
                      className="offcanvas-image img-popup"
                    >
                      <img src="assets/img/header/06.jpg" alt="gallery-img" />
                    </a>
                  </div>
                </div>
                <div className="mobile-menu fix mb-3" />
                <div className="offcanvas__contact">
                  <h4>Contact Info</h4>
                  <ul>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a target="_blank" href="#">
                          Main Street, Melbourne, Australia
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="tel:+013-003-003-9993">
                          <span className="mailto:info@enofik.com">
                            info@fresheat.com
                          </span>
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-clock" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a target="_blank" href="#">
                          Mod-friday, 09am -05pm
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="far fa-phone" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="tel:+11002345909">+11002345909</a>
                      </div>
                    </li>
                  </ul>
                  <div className="header-button mt-4">
                    <a href="shop.html" className="theme-btn">
                      <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                        <span className="button-icon">
                          <i className="fa-sharp fa-regular fa-cart-shopping bg-transparent text-white me-2" />
                        </span>
                        <span className="button-text">ORDER NOW</span>
                      </span>
                    </a>
                  </div>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Offcanvas