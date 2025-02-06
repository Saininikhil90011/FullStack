import React from 'react'

function Header({props}) {
  console.log(props)


  

  return (
    <>
     <header className="header-section">
          <div className="black-bg" />
          <div className="red-bg" />
          <div className="container-fluid">
            <div className="main-header-wrapper">
              <div className="logo-image">
                <a href="index.html">
                  <img src="assets/img/logo/logo.svg" alt="img" />
                </a>
              </div>
              <div className="main-header-items">
                <div className="header-top-wrapper">
                  <span>
                    <i className="fa-regular fa-clock" /> 09:00 am - 06:00 pm
                  </span>
                  <div className="social-icon d-flex align-items-center">
                    <span>Follow Us:</span>
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
                <div id="header-sticky" className="header-1">
                  <div className="mega-menu-wrapper">
                    <div className="header-main">
                      <div className="logo">
                        <a href="index.html" className="header-logo">
                          <img src="assets/img/logo/logo.svg" alt="logo-img" />
                        </a>
                      </div>
                      <div className="header-left">
                        <div className="mean__menu-wrapper">
                          <div className="main-menu">
                            <nav id="mobile-menu">
                              <ul>
                                <li className="has-dropdown active menu-thumb">
                                  <a href="index.html">
                                    Home
                                    <i className="fa-regular fa-plus" />
                                  </a>
                                  <ul className="submenu has-homemenu">
                                    <li>
                                      <div className="homemenu-items">
                                        <div className="homemenu">
                                          <div className="homemenu-thumb">
                                            <img
                                              src="assets/img/header/home1.jpg"
                                              alt="img"
                                            />
                                            <div className="demo-button">
                                              <a
                                                href="index.html"
                                                className="theme-btn"
                                              >
                                                Multi Page
                                              </a>
                                              <a
                                                href="index-one-page.html"
                                                className="theme-btn"
                                              >
                                                One Page
                                              </a>
                                              <a
                                                href="index-dark.html"
                                                className="theme-btn"
                                              >
                                                Dark Page
                                              </a>
                                            </div>
                                          </div>
                                          <div className="homemenu-content text-center">
                                            <h4 className="homemenu-title">
                                              Home 01
                                            </h4>
                                          </div>
                                        </div>
                                        <div className="homemenu">
                                          <div className="homemenu-thumb mb-15">
                                            <img
                                              src="assets/img/header/home2.jpg"
                                              alt="img"
                                            />
                                            <div className="demo-button">
                                              <a
                                                href="index-2.html"
                                                className="theme-btn"
                                              >
                                                Multi Page
                                              </a>
                                              <a
                                                href="index-two-page.html"
                                                className="theme-btn"
                                              >
                                                One Page
                                              </a>
                                              <a
                                                href="index-2-dark.html"
                                                className="theme-btn"
                                              >
                                                Dark Page
                                              </a>
                                            </div>
                                          </div>
                                          <div className="homemenu-content text-center">
                                            <h4 className="homemenu-title">
                                              Home 02
                                            </h4>
                                          </div>
                                        </div>
                                        <div className="homemenu">
                                          <div className="homemenu-thumb mb-15">
                                            <img
                                              src="assets/img/header/home3.jpg"
                                              alt="img"
                                            />
                                            <div className="demo-button">
                                              <a
                                                href="index-3.html"
                                                className="theme-btn"
                                              >
                                                Multi Page
                                              </a>
                                              <a
                                                href="index-three-page.html"
                                                className="theme-btn"
                                              >
                                                One Page
                                              </a>
                                              <a
                                                href="index-3-dark.html"
                                                className="theme-btn"
                                              >
                                                Dark Page
                                              </a>
                                            </div>
                                          </div>
                                          <div className="homemenu-content text-center">
                                            <h4 className="homemenu-title">
                                              Home 03
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li className="has-dropdown active d-xl-none">
                                  <a href="index.html" className="border-none">
                                    Home
                                    <i className="fa-regular fa-plus" />
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="index.html">Home 01</a>
                                    </li>
                                    <li>
                                      <a href="index-2.html">Home 02</a>
                                    </li>
                                    <li>
                                      <a href="index-3.html">Home 03</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="has-dropdown">
                                  <a href="about.html">
                                    About Us
                                    <i className="fa-regular fa-plus" />
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="about.html">About Us 01</a>
                                    </li>
                                    <li>
                                      <a href="about-2.html">About Us 02</a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="shop.html">
                                    Shop
                                    <i className="fa-regular fa-plus" />
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="shop.html">Shop</a>
                                    </li>
                                    <li>
                                      <a href="shop-right-sidebar.html">
                                        Shop Right Sidebar
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-list.html">Shop List</a>
                                    </li>
                                    <li>
                                      <a href="shop-list-right-sidebar.html">
                                        Shop List Right Sidebar
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-details.html">
                                        Shop Details
                                      </a>
                                    </li>
                                    <li>
                                      <a href="cart.html">Cart List</a>
                                    </li>
                                    <li>
                                      <a href="checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                      <a href="wishlist.html">Wishlist</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="has-dropdown">
                                  <a href="#">
                                    Pages
                                    <i className="fa-regular fa-plus" />
                                  </a>
                                  <ul className="submenu">
                                    <li className="has-dropdown">
                                      <a href="chef.html">
                                        Chef
                                        <i className="fas fa-angle-down" />
                                      </a>
                                      <ul className="submenu">
                                        <li>
                                          <a href="chef.html">Chef</a>
                                        </li>
                                        <li>
                                          <a href="chef-details.html">
                                            Chef Details 01
                                          </a>
                                        </li>
                                        <li>
                                          <a href="chef-details2.html">
                                            Chef Details 02
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="has-dropdown">
                                      <a href="menu.html">
                                        Food Menu
                                        <i className="fas fa-angle-down" />
                                      </a>
                                      <ul className="submenu">
                                        <li>
                                          <a href="menu.html">Food Menu 01</a>
                                        </li>
                                        <li>
                                          <a href="menu2.html">Food Menu 02</a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="gallery.html">Gallery</a>
                                    </li>
                                    <li className="has-dropdown">
                                      <a href="services.html">
                                        Services
                                        <i className="fas fa-angle-down" />
                                      </a>
                                      <ul className="submenu">
                                        <li>
                                          <a href="services.html">Services</a>{" "}
                                        </li>
                                        <li>
                                          <a href="service-details.html">
                                            Service Details
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="testimonials.html">
                                        Testimonials
                                      </a>
                                    </li>
                                    <li>
                                      <a href="reservation.html">Reservation</a>
                                    </li>
                                    <li>
                                      <a href="faq.html">Faq's</a>
                                    </li>
                                    <li>
                                      <a href="account.html">My Account</a>
                                    </li>
                                    <li>
                                      <a href="404.html">404 Page</a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="blog.html">
                                    Blog
                                    <i className="fa-regular fa-plus" />
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                      <a href="blog-standard.html">
                                        Blog Standard
                                      </a>
                                    </li>
                                    <li>
                                      <a href="blog-left-sidebar.html">
                                        Blog Left Sidebar
                                      </a>
                                    </li>
                                    <li>
                                      <a href="blog-details.html">
                                        Blog Details
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="contact.html">
                                    Contact Us
                                    <i className="fa-regular fa-plus" />
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="contact.html">Contact Us 01</a>
                                    </li>
                                    <li>
                                      <a href="contact2.html">Contact Us 02</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                      <div className="header-right d-flex justify-content-end align-items-center">
                        <a href="#0" className="search-trigger search-icon">
                          <i className="fal fa-search" />
                        </a>
                        <div className="header__cart" style={{content:"3"}}>
                          <a >
                      
                            <i className="fa-sharp fa-regular fa-cart-shopping" />
                            <span className="cart-count">{5}</span>
                          </a>
                          <div className="header__right__dropdown__wrapper">
                            <div className="header__right__dropdown__inner">
                              <div className="single__header__right__dropdown">
                                <div className="header__right__dropdown__img">
                                  <a href="#">
                                    <img
                                      loading="lazy"
                                      src="assets/img/blog/blogRecentThumb3_1.png"
                                      alt="photo"
                                    />
                                  </a>
                                </div>
                                <div className="header__right__dropdown__content">
                                  <a href="shop.html">Fried Chicken</a>
                                  <p>
                                    1 x <span className="price">$ 80.00</span>
                                  </p>
                                </div>
                                <div className="header__right__dropdown__close">
                                  <a href="#">
                                    <i className="icofont-close-line" />
                                  </a>
                                </div>
                              </div>
                              <div className="single__header__right__dropdown">
                                <div className="header__right__dropdown__img">
                                  <a href="#">
                                    <img
                                      loading="lazy"
                                      src="assets/img/blog/blogRecentThumb3_2.png"
                                      alt="photo"
                                    />
                                  </a>
                                </div>
                                <div className="header__right__dropdown__content">
                                  <a href="shop.html">Fried Noodles</a>
                                  <p>
                                    1 x <span className="price">$ 60.00</span>
                                  </p>
                                </div>
                                <div className="header__right__dropdown__close">
                                  <a href="#">
                                    <i className="icofont-close-line" />
                                  </a>
                                </div>
                              </div>
                              <div className="single__header__right__dropdown">
                                <div className="header__right__dropdown__img">
                                  <a href="#">
                                    <img
                                      loading="lazy"
                                      src="assets/img/blog/blogRecentThumb3_3.png"
                                      alt="photo"
                                    />
                                  </a>
                                </div>
                                <div className="header__right__dropdown__content">
                                  <a href="shop.html">Special Pasta</a>
                                  <p>
                                    1 x <span className="price">$ 70.00</span>
                                  </p>
                                </div>
                                <div className="header__right__dropdown__close">
                                  <a href="#">
                                    <i className="icofont-close-line" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <p className="dropdown__price">
                              Total: <span>$1,100.00</span>
                            </p>
                            <div className="header__right__dropdown__button">
                              <a href="cart.html" className="theme-btn mb-2">
                                View Cart
                              </a>
                              <a
                                href="checkout.html"
                                className="theme-btn style3"
                              >
                                Checkout
                              </a>
                            </div>
                          </div>
                        </div>
                        <a className="theme-btn" href="menu.html">
                          ORDER NOW{" "}
                          <i className="fa-sharp fa-regular fa-arrow-right" />
                        </a>
                        <div className="header__hamburger d-xl-block my-auto">
                          <div className="sidebar__toggle">
                            <i className="fas fa-bars" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    </>
  )
}

export default Header