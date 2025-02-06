import React from 'react'

function BestFood() {
  return (
    <>
      <section className="best-food-items-section fix section-padding bg-color2">
          <div className="best-food-wrapper">
            <div className="shape1 float-bob-y d-none d-xxl-block">
              <img
                src="assets/img/shape/bestFoodItemsShape1_1.png"
                alt="shape"
              />
            </div>
            <div className="shape2 float-bob-x d-none d-xxl-block">
              <img
                src="assets/img/shape/bestFoodItemsShape1_2.png"
                alt="shape"
              />
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
                  Best Food{" "}
                  <img src="assets/img/icon/titleIcon.svg" alt="icon" />
                </div>
                <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                  Popular Food Items
                </h2>
              </div>
              <div className="slider-area mb-n40">
                <div className="swiper bestFoodItems-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="single-food-items">
                        <div className="item-thumb">
                          <img
                            src="assets/img/food-items/item1_1.png"
                            alt="thumb"
                          />
                          <div className="circle-shape">
                            <img
                              className="cir36"
                              src="assets/img/food-items/circleShape.png"
                              alt="shape"
                            />
                          </div>
                        </div>
                        <div className="item-content">
                          <a href="menu.html">
                            <h3>Chicken Pizza</h3>
                          </a>
                          <div className="text">The registration fee</div>
                          <h6>$26.99</h6>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="single-food-items">
                        <div className="item-thumb">
                          <img
                            src="assets/img/food-items/item1_2.png"
                            alt="thumb"
                          />
                          <div className="circle-shape">
                            <img
                              className="cir36"
                              src="assets/img/food-items/circleShape.png"
                              alt="shape"
                            />
                          </div>
                        </div>
                        <div className="item-content">
                          <a href="menu.html">
                            <h3>Egg and Cucumber</h3>
                          </a>
                          <div className="text">The registration fee</div>
                          <h6>$28.00</h6>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="single-food-items">
                        <div className="item-thumb">
                          <img
                            src="assets/img/food-items/item1_3.png"
                            alt="thumb"
                          />
                          <div className="circle-shape">
                            <img
                              className="cir36"
                              src="assets/img/food-items/circleShape.png"
                              alt="shape"
                            />
                          </div>
                        </div>
                        <div className="item-content">
                          <a href="menu.html">
                            <h3>Chicken Fried Rice</h3>
                          </a>
                          <div className="text">The registration fee</div>
                          <h6>$100.99</h6>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="single-food-items">
                        <div className="item-thumb">
                          <img
                            src="assets/img/food-items/item1_4.png"
                            alt="thumb"
                          />
                          <div className="circle-shape">
                            <img
                              className="cir36"
                              src="assets/img/food-items/circleShape.png"
                              alt="shape"
                            />
                          </div>
                        </div>
                        <div className="item-content">
                          <a href="menu.html">
                            <h3>Chicken Leg Piece</h3>
                          </a>
                          <div className="text">The registration fee</div>
                          <h6>$20.99</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bestFoodItems-pagination" />
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default BestFood