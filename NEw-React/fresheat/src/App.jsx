import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Helmet } from "react-helmet-async";
import Offcanvas from "./components/Offcanvas";
import Header from "./components/Header";
import Search from "./components/Search";
import Banner from "./components/Banner";
import BestFood from "./components/Best Food";
import OfferSection from "./components/OfferSection";
import AboutUsSection from "./components/About Us Section";
import PopularDishesSection from "./components/Popular Dishes Section";
import Ctasection from "./components/Cta section";
import FoodMenusection from "./components/FoodMenusection";
import Timersection from "./components/Timersection";
import ChefeSection from "./components/ChefeSection ";
import TestimonialSection from "./components/Testimonial Section";
import BlogSection from "./components/BlogSection";
import GallerySection from "./components/Gallery Section";
import FooterSection from "./components/FooterSection";

function App() {
  const [loading, setLoading] = useState(false);

  const [money, setmoney]=useState([])
  let arr2 = (val1)=>{
     setmoney([...money,val1])
    
  }
  console.log(money);
  

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // 2000 ms = 2 seconds
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <>
        <Helmet>
          <>
            <title>Fresheat food & Restaurant Html Template</title>
            <link rel="shortcut icon" href="/assets/img/favicon.png" />
            <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/assets/css/all.min.css" />
            <link rel="stylesheet" href="assets/css/animate.css" />
            <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
            <link rel="stylesheet" href="/assets/css/meanmenu.css" />
            <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
            <link rel="stylesheet" href="/assets/css/nice-select.css" />
            <link rel="stylesheet" href="/assets/css/main.css" />/{" "}
          </>
        </Helmet>
        {/* Preloader Start */}
        {loading ? (
          <div id="preloader" className="preloader">
            <div className="animation-preloader">
              <div className="spinner"></div>
              <div className="txt-loading">
                <span data-text-preloader="F" className="letters-loading">
                  F
                </span>
                <span data-text-preloader="R" className="letters-loading">
                  R
                </span>
                <span data-text-preloader="E" className="letters-loading">
                  E
                </span>
                <span data-text-preloader="S" className="letters-loading">
                  S
                </span>
                <span data-text-preloader="H" className="letters-loading">
                  H
                </span>
                <span data-text-preloader="E" className="letters-loading">
                  E
                </span>
                <span data-text-preloader="A" className="letters-loading">
                  A
                </span>
                <span data-text-preloader="T" className="letters-loading">
                  T
                </span>
              </div>
              <p className="text-center">Loading</p>
            </div>
            <div className="loader">
              <div className="row">
                <div className="col-3 loader-section section-left">
                  <div className="bg" />
                </div>
                <div className="col-3 loader-section section-left">
                  <div className="bg" />
                </div>
                <div className="col-3 loader-section section-right">
                  <div className="bg" />
                </div>
                <div className="col-3 loader-section section-right">
                  <div className="bg" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/*<< Mouse Cursor Start >>*/}
        <div className="mouse-cursor cursor-outer" />
        <div className="mouse-cursor cursor-inner" />
        {/* Back To Top Start */}
        <button id="back-top" className="back-to-top">
          <i className="fa-regular fa-arrow-up" />
        </button>

        <Offcanvas />
        <div className="offcanvas__overlay" />

        <Header props={{money}} />

        <Search />

        <section className="banner-section fix">
          <div className="slider-area">
            <div className="swiper banner-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="banner-wrapper style1 bg-img">
                    <div
                      className="shape1_1 d-none d-xxl-block"
                      data-animation="slideInLeft"
                      data-duration="2s"
                      data-delay=".3s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_1.svg"
                        alt="shape"
                      />
                    </div>
                    <div
                      className="shape1_2 d-none d-xxl-block"
                      data-animation="slideInLeft"
                      data-duration="2s"
                      data-delay=".3s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_2.svg"
                        alt="shape"
                      />
                    </div>
                    <div
                      className="shape1_3 d-none d-xxl-block"
                      data-animation="slideInLeft"
                      data-duration="3s"
                      data-delay="2s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_3.svg"
                        alt="shape"
                      />
                    </div>
                    <div
                      className="shape1_4 d-none d-xxl-block"
                      data-animation="slideInLeft"
                      data-duration="2s"
                      data-delay=".3s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_4.svg"
                        alt="shape"
                      />
                    </div>
                    <div
                      className="shape1_5 d-none d-xxl-block"
                      data-animation="slideInLeft"
                      data-duration="2s"
                      data-delay=".3s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_5.svg"
                        alt="shape"
                      />
                    </div>
                    <div className="shape1_6 d-none d-xxl-block cir36">
                      <img
                        src="assets/img/shape/bannerShape1_6.svg"
                        alt="shape"
                      />
                    </div>
                    <div className="overlay" />
                    <div className="banner-container">
                      <div className="container">
                        <div className="row">
                          <div className="col-12 col-xxl-6">
                            <div className="banner-title-area">
                              <div className="banner-style1">
                                <div className="section-title">
                                  <h6
                                    className="sub-title"
                                    data-animation="slideInRight"
                                    data-duration="2s"
                                    data-delay=".3s"
                                  >
                                    {" "}
                                    WELCOME FRESHEAT{" "}
                                  </h6>
                                  <h1
                                    className="title"
                                    data-animation="slideInRight"
                                    data-duration="2s"
                                    data-delay=".5s"
                                  >
                                    SPICY FRIED CHICKEN
                                  </h1>
                                  <a
                                    className="theme-btn"
                                    href="contact.html"
                                    data-animation="slideInRight"
                                    data-duration="2s"
                                    data-delay=".7s"
                                  >
                                    ORDER NOW{" "}
                                    <i className="fa-sharp fa-regular fa-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-xl-6 d-none d-xxl-block">
                            <div
                              className="banner-thumb-area"
                              data-tilt=""
                              data-animation="slideInRight"
                              data-duration="2s"
                              data-delay=".9s"
                            >
                              <img
                                src="assets/img/banner/bannerThumb1_1.png"
                                alt="shape"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-wrapper style1 bg-img">
                    <div
                      className="shape1_1 d-none d-xxl-block"
                      data-animation="slideInLeft"
                      data-duration="2s"
                      data-delay=".3s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_1.svg"
                        alt="shape"
                      />
                    </div>
                    <div
                      className="shape1_2 d-none d-xxl-block"
                      data-animation="slideInLeft"
                      data-duration="2s"
                      data-delay=".3s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_2.svg"
                        alt="shape"
                      />
                    </div>
                    <div
                      className="shape1_3 d-none d-xxl-block"
                      data-animation="slideInLeft"
                      data-duration="3s"
                      data-delay="2s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_3.svg"
                        alt="shape"
                      />
                    </div>
                    <div
                      className="shape1_4 d-none d-xxl-block float-bob-x"
                      data-animation="slideInLeft"
                      data-duration="2s"
                      data-delay=".3s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_4.svg"
                        alt="shape"
                      />
                    </div>
                    <div
                      className="shape1_5 d-none d-xxl-block"
                      data-animation="slideInLeft"
                      data-duration="2s"
                      data-delay=".3s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_5.svg"
                        alt="shape"
                      />
                    </div>
                    <div className="shape1_6 d-none d-xxl-block cir36">
                      <img
                        src="assets/img/shape/bannerShape1_6.svg"
                        alt="shape"
                      />
                    </div>
                    <div className="overlay" />
                    <div className="banner-container">
                      <div className="container">
                        <div className="row">
                          <div className="col-12 col-xxl-6">
                            <div className="banner-title-area">
                              <div className="banner-style1">
                                <div className="section-title">
                                  <h6
                                    className="sub-title"
                                    data-animation="slideInRight"
                                    data-duration="2s"
                                    data-delay=".3s"
                                  >
                                    {" "}
                                    WELCOME FRESHEAT{" "}
                                  </h6>
                                  <h1
                                    className="title"
                                    data-animation="slideInRight"
                                    data-duration="2s"
                                    data-delay=".5s"
                                  >
                                    Chicago Deep Pizza King
                                  </h1>
                                  <a
                                    className="theme-btn"
                                    href="menu.html"
                                    data-animation="slideInRight"
                                    data-duration="2s"
                                    data-delay=".7s"
                                  >
                                    ORDER NOW{" "}
                                    <i className="fa-sharp fa-regular fa-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-xl-6 d-none d-xxl-block">
                            <div
                              className="banner-thumb-area"
                              data-tilt=""
                              data-animation="slideInRight"
                              data-duration="2s"
                              data-delay=".9s"
                            >
                              <img
                                src="assets/img/banner/bannerThumb1_2.png"
                                alt="shape"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-wrapper style1 bg-img">
                    <div
                      className="shape1_1 d-none d-xxl-block"
                      data-animation="slideInLeft"
                      data-duration="2s"
                      data-delay=".3s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_1.svg"
                        alt="shape"
                      />
                    </div>
                    <div
                      className="shape1_2 d-none d-xxl-block"
                      data-animation="slideInLeft"
                      data-duration="2s"
                      data-delay=".3s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_2.svg"
                        alt="shape"
                      />
                    </div>
                    <div
                      className="shape1_3 d-none d-xxl-block"
                      data-animation="slideInLeft"
                      data-duration="3s"
                      data-delay="2s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_3.svg"
                        alt="shape"
                      />
                    </div>
                    <div
                      className="shape1_4 d-none d-xxl-block"
                      data-animation="slideInLeft"
                      data-duration="2s"
                      data-delay=".3s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_4.svg"
                        alt="shape"
                      />
                    </div>
                    <div
                      className="shape1_5 d-none d-xxl-block"
                      data-animation="slideInLeft"
                      data-duration="2s"
                      data-delay=".3s"
                    >
                      <img
                        src="assets/img/shape/bannerShape1_5.svg"
                        alt="shape"
                      />
                    </div>
                    <div className="shape1_6 d-none d-xxl-block cir36">
                      <img
                        src="assets/img/shape/bannerShape1_6.svg"
                        alt="shape"
                      />
                    </div>
                    <div className="overlay" />
                    <div className="banner-container">
                      <div className="container">
                        <div className="row">
                          <div className="col-12 col-xxl-6">
                            <div className="banner-title-area">
                              <div className="banner-style1">
                                <div className="section-title">
                                  <h6
                                    className="sub-title"
                                    data-animation="slideInRight"
                                    data-duration="2s"
                                    data-delay=".3s"
                                  >
                                    {" "}
                                    WELCOME FRESHEAT{" "}
                                  </h6>
                                  <h1
                                    className="title"
                                    data-animation="slideInRight"
                                    data-duration="2s"
                                    data-delay=".5s"
                                  >
                                    Chicago Deep Burger King
                                  </h1>
                                  <a
                                    className="theme-btn"
                                    href="menu.html"
                                    data-animation="slideInRight"
                                    data-duration="2s"
                                    data-delay=".7s"
                                  >
                                    ORDER NOW{" "}
                                    <i className="fa-sharp fa-regular fa-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-xl-6 d-none d-xxl-block">
                            <div
                              className="banner-thumb-area"
                              data-tilt=""
                              data-animation="slideInRight"
                              data-duration="2s"
                              data-delay=".9s"
                            >
                              <img
                                src="assets/img/banner/bannerThumb1_3.png"
                                alt="shape"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="arrow-prev">
                <img src="assets/img/icon/arrowPrev.svg" alt="Icon" />
              </div>
              <div className="arrow-next">
                <img src="assets/img/icon/arrowNext.svg" alt="Icon" />
              </div>
              <div className="pagination-class swiper-pagination" />
            </div>
          </div>
        </section>

        <BestFood />

        <OfferSection />

        <AboutUsSection />

        <PopularDishesSection props={{arr2}}/>

        <Ctasection />

        <FoodMenusection />

        <Timersection />

        <ChefeSection />

        <TestimonialSection />

        <BlogSection />

        <GallerySection />

        <FooterSection />
      </>
      <>
        <Helmet>
          <script src="/assets/js/jquery-3.7.1.min.js" defer></script>
          <script src="/assets/js/bootstrap.bundle.min.js" defer></script>
          <script src="/assets/js/jquery.waypoints.js" defer></script>
          <script src="/assets/js/jquery.counterup.min.js" defer></script>
          <script src="/assets/js/viewport.jquery.js" defer></script>
          <script src="/assets/js/magnific-popup.min.js" defer></script>
          <script src="/assets/js/tilt.min.js" defer></script>
          <script src="/assets/js/swiper-bundle.min.js" defer></script>
          <script src="/assets/js/jquery.meanmenu.min.js" defer></script>
          <script src="/assets/js/wow.min.js" defer></script>
          <script src="/assets/js/nice-select.min.js" defer></script>
          <script src="/assets/js/main.js" defer></script>
        </Helmet>
      </>
    </>
  );
}

export default App;
