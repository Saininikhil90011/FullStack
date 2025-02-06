import React from 'react'

function FoodMenusection() {
  return (
    <>
  <section className="food-menu-section fix section-padding">
          <div className="burger-shape">
            <img src="assets/img/shape/burger-shape.png" alt="img" />
          </div>
          <div className="fry-shape">
            <img src="assets/img/shape/fry-shape.png" alt="img" />
          </div>
          <div className="food-menu-wrapper style1">
            <div className="container">
              <div className="food-menu-tab-wrapper style-bg">
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
                    FOOD MENU
                    <img
                      className="ms-1"
                      src="assets/img/icon/titleIcon.svg"
                      alt="icon"
                    />
                  </div>
                  <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                    Fresheat Foods Menu
                  </h2>
                </div>
                <div className="food-menu-tab">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-FastFood-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-FastFood"
                        type="button"
                        role="tab"
                        aria-controls="pills-FastFood"
                        aria-selected="true"
                      >
                        <img src="assets/img/menu/menuIcon1_1.png" alt="icon" />
                        Fast Food
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-drinkJuice-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-drinkJuice"
                        type="button"
                        role="tab"
                        aria-controls="pills-drinkJuice"
                        aria-selected="false"
                      >
                        <img src="assets/img/menu/menuIcon1_2.png" alt="icon" />
                        Drink &amp; Juice
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-chickenPizza-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-chickenPizza"
                        type="button"
                        role="tab"
                        aria-controls="pills-chickenPizza"
                        aria-selected="false"
                      >
                        <img src="assets/img/menu/menuIcon1_3.png" alt="icon" />
                        Chicken Pizza
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-freshPasta-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-freshPasta"
                        type="button"
                        role="tab"
                        aria-controls="pills-freshPasta"
                        aria-selected="false"
                      >
                        <img src="assets/img/menu/menuIcon1_4.png" alt="icon" />
                        Fresh Pasta
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-FastFood"
                      role="tabpanel"
                      aria-labelledby="pills-FastFood-tab"
                      tabIndex={0}
                    >
                      <div className="row gx-60">
                        <div className="col-lg-6">
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_1.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3 className="active">Chinese Pasta</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$15.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_2.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken Fried Rice</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$25.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_3.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken Pizza</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$115.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_4.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken Noodles</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$154.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_5.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Grilled Chicken</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$55.99</h6>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_6.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Egg and Cucumber</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$65.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_7.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken White Rice</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$135.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_8.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Spatial Barger</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$95.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_9.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Vegetables Burger</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$75.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_10.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Brief Chicken</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$44.99</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-drinkJuice"
                      role="tabpanel"
                      aria-labelledby="pills-drinkJuice-tab"
                      tabIndex={0}
                    >
                      <div className="row gx-30">
                        <div className="col-lg-6">
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_1.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chinese Pasta</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$15.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_2.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken Fried Rice</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$25.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_3.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken Pizza</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$115.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_4.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken Noodles</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$154.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_5.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Grilled Chicken</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$55.99</h6>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_6.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Egg and Cucumber</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$65.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_7.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken White Rice</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$135.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_8.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Spatial Barger</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$95.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_9.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Vegetables Burger</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$75.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_10.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Brief Chicken</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$44.99</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-chickenPizza"
                      role="tabpanel"
                      aria-labelledby="pills-chickenPizza-tab"
                      tabIndex={0}
                    >
                      <div className="row gx-30">
                        <div className="col-lg-6">
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_1.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chinese Pasta</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$15.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_2.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken Fried Rice</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$25.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_3.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken Pizza</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$115.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_4.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken Noodles</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$154.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_5.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Grilled Chicken</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$55.99</h6>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_6.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Egg and Cucumber</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$65.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_7.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken White Rice</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$135.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_8.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Spatial Barger</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$95.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_9.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Vegetables Burger</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$75.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_10.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Brief Chicken</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$44.99</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-freshPasta"
                      role="tabpanel"
                      aria-labelledby="pills-freshPasta-tab"
                      tabIndex={0}
                    >
                      <div className="row gx-30">
                        <div className="col-lg-6">
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_1.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chinese Pasta</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$15.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_2.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken Fried Rice</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$25.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_3.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken Pizza</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$115.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_4.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken Noodles</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$154.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_5.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Grilled Chicken</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$55.99</h6>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_6.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Egg and Cucumber</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$65.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_7.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Chicken White Rice</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$135.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_8.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Spatial Barger</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$95.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_9.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Vegetables Burger</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$75.99</h6>
                          </div>
                          <div className="single-menu-items">
                            <div className="details">
                              <div className="menu-item-thumb">
                                <img
                                  src="assets/img/menu/menuThumb1_10.png"
                                  alt="thumb"
                                />
                              </div>
                              <div className="menu-content">
                                <a href="menu.html">
                                  <h3>Brief Chicken</h3>
                                </a>
                                <p>It's a testament to our.</p>
                              </div>
                            </div>
                            <h6>$44.99</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="marquee-wrapper style-1 text-slider section-padding pt-0 mt-5">
            <div className="marquee-inner to-left">
              <ul className="marqee-list d-flex">
                <li className="marquee-item style1">
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
    </>
  )
}

export default FoodMenusection