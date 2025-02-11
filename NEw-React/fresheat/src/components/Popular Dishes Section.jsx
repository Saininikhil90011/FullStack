import React, { useState } from "react";
import Singledisc from "./Singledisc";

function PopularDishesSection({props}) {
  // console.log(props)

  const [arr, setarr] = useState([])
  let add = (val)=>{
    setarr([...arr,val])
    props.arr2(val)
  }
  // console.log(arr);
  

  return (
    <>
      <section className="popular-dishes-section fix section-padding">
        <div className="popular-dishes-wrapper style1">
          <div className="shape1 d-none d-xxl-block">
            <img src="assets/img/shape/popularDishesShape1_1.png" alt="shape" />
          </div>
          <div className="shape2 float-bob-y d-none d-xxl-block">
            <img src="assets/img/shape/popularDishesShape1_2.png" alt="shape" />
          </div>
          <div className="container">
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
                POPULAR DISHES
                <img
                  className="ms-1"
                  src="assets/img/icon/titleIcon.svg"
                  alt="icon"
                />
              </div>
              <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                Best selling Dishes
              </h2>
            </div>
            <div className="dishes-card-wrap style1">
              <Singledisc props={{img:"assets/img/dishes/dishes1_1.png",title1:"Chicken Fried Rice",title2:"The registration fee",price:"100.99",add}}/>
              <Singledisc props={{img:"assets/img/dishes/dishes1_2.png",title1:"Chinese Pasta",title2:"The registration fee",price:"139.99",add}}/>
              <Singledisc props={{img:"assets/img/dishes/dishes1_3.png",title1:"Chicken Pizza",title2:"The registration fee",price:"130.99",add}}/>
              <Singledisc props={{img:"assets/img/dishes/dishes1_4.png",title1:"Chicken Noodles",title2:"The registration fee",price:"200.99",add}}/>
              <Singledisc props={{img:"assets/img/dishes/dishes1_5.png",title1:"Grilled Chicken",title2:"The registration fee",price:"100.99",add}}/>
              
              {/*<div
                className="dishes-card style1 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="social-profile">
                  <span className="plus-btn">
                    {" "}
                    <a href="#">
                      {" "}
                      <i className="fa-regular fa-heart" />
                    </a>
                  </span>
                  <ul>
                    <li>
                      <a href="cart.html">
                        <i className="fa-regular fa-basket-shopping-simple" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-light fa-eye" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dishes-thumb">
                  <img src="assets/img/dishes/dishes1_2.png" alt="thmb" />
                </div>
                <a href="menu.html">
                  <h3>Chinese Pasta</h3>
                </a>
                <p>The registration fee</p>
                <h6>$15.99</h6>
              </div>
              <div
                className="dishes-card style1 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="social-profile">
                  <span className="plus-btn">
                    {" "}
                    <a href="#">
                      {" "}
                      <i className="fa-regular fa-heart" />
                    </a>
                  </span>
                  <ul>
                    <li>
                      <a href="cart.html">
                        <i className="fa-regular fa-basket-shopping-simple" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-light fa-eye" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dishes-thumb">
                  <img src="assets/img/dishes/dishes1_3.png" alt="thmb" />
                </div>
                <a href="menu.html">
                  <h3>Chicken Pizza</h3>
                </a>
                <p>The registration fee</p>
                <h6>$26.99</h6>
              </div>
              <div
                className="dishes-card style1 wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <div className="social-profile">
                  <span className="plus-btn">
                    {" "}
                    <a href="#">
                      {" "}
                      <i className="fa-regular fa-heart" />
                    </a>
                  </span>
                  <ul>
                    <li>
                      <a href="cart.html">
                        <i className="fa-regular fa-basket-shopping-simple" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-light fa-eye" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dishes-thumb">
                  <img src="assets/img/dishes/dishes1_4.png" alt="thmb" />
                </div>
                <a href="menu.html">
                  <h3>Chicken Noodles</h3>
                </a>
                <p>The registration fee</p>
                <h6>$39.00</h6>
              </div>
              <div
                className="dishes-card style1 wow fadeInUp"
                data-wow-delay="0.9s"
              >
                <div className="social-profile">
                  <span className="plus-btn">
                    {" "}
                    <a href="wishlist.html">
                      {" "}
                      <i className="fa-regular fa-heart" />
                    </a>
                  </span>
                  <ul>
                    <li>
                      <a href="cart.html">
                        <i className="fa-regular fa-basket-shopping-simple" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-light fa-eye" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dishes-thumb">
                  <img src="assets/img/dishes/dishes1_5.png" alt="thmb" />
                </div>
                <a href="menu.html">
                  <h3>Grilled Chicken</h3>
                </a>
                <p>The registration fee</p>
                <h6>$20.99</h6>
              </div> */}
            </div>
            <div className="btn-wrapper  wow fadeInUp" data-wow-delay="0.9s">
              <a className="theme-btn" href="menu2.html">
                VIEW ALL ITEM{" "}
                <i className="fa-sharp fa-regular fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-centered">
            <div className="modal-content pb-3 pe-3">
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row gy-5">
                    <div className="col-xxl-6">
                      <div className="modal-thumb">
                        <div className="product-big-img bg-color2">
                          <div className="dishes-thumb">
                            <img
                              className="img-fluid"
                              src="assets/img/dishes/dishes3_1.png"
                              alt="thumb"
                            />
                            <div className="circle-shape">
                              <img
                                className="cir36"
                                src="assets/img/food-items/circleShape2.png"
                                alt="shape"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6">
                      <div className="modal-details">
                        <div className="product-about">
                          <div className="title-wrapper">
                            <h2 className="product-title">Chicken Pizza</h2>
                            <div className="price">$69</div>
                          </div>
                          <div className="product-rating">
                            <div
                              className="star-rating"
                              role="img"
                              aria-label="Rated 5.00 out of 5"
                            >
                              <span style={{ width: "100%" }}>
                                Rated <strong className="rating">5.00</strong>
                                out of 5 based on{" "}
                                <span className="rating">1</span> customer
                                rating
                              </span>
                            </div>
                            <a
                              href="shop-details.html"
                              className="woocommerce-review-link"
                            >
                              (<span className="count">2</span> customer
                              reviews)
                            </a>
                          </div>
                          <p className="text">
                            Aliquam hendrerit a augue insuscipit. Etiam aliquam
                            massa quis des mauris commodo venenatis ligula
                            commodo leez sed blandit convallis dignissim onec
                            vel pellentesque neque.
                          </p>
                          <div className="actions">
                            <div className="quantity">
                              <p>Quantity</p>
                              <div className="qty-wrapper">
                                <button className="quantity-plus qty-btn">
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <input
                                  type="number"
                                  className="qty-input"
                                  step={1}
                                  min={1}
                                  max={100}
                                  name="quantity"
                                  defaultValue={1}
                                  title="Qty"
                                />
                                <button className="quantity-minus qty-btn">
                                  <i className="fa-solid fa-minus" />
                                </button>
                              </div>
                            </div>
                            <a href="cart.html" className="theme-btn">
                              Add to Cart
                              <i className="fa-regular fa-cart-shopping bg-transparent text-white" />
                            </a>
                            <a
                              href="wishlist.html"
                              className="theme-btn style5 border-0"
                            >
                              ADD TO wishlist
                              <i className="fa-sharp fa-solid fa-heart" />
                            </a>
                          </div>
                          <div className="share">
                            <h6>share with friends</h6>
                            <ul className="social-media">
                              <li>
                                {" "}
                                <a href="https://www.facebook.com/">
                                  {" "}
                                  <i className="fa-brands fa-facebook-f" />{" "}
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a href="https://www.youtube.com/">
                                  {" "}
                                  <i className="fa-brands fa-youtube" />{" "}
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a href="https://www.x.com/">
                                  {" "}
                                  <i className="fa-brands fa-twitter" />{" "}
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a href="https://www.instagram.com/">
                                  {" "}
                                  <i className="fa-brands fa-instagram" />{" "}
                                </a>{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularDishesSection;
