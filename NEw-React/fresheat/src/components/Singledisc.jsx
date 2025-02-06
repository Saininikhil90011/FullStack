import React from 'react'

function Singledisc({props}) {
    const click = (obj)=>{//check kiya hai paise 5 rupee
        props.add(obj)
    }
    
  return (
    <>
    <div
                className="dishes-card style1 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="dishes-thumb">
                  <img src={props["img"]} alt="thmb" />
                </div>
                <a href="menu.html">
                  <h3>{props["title1"]}</h3>
                </a>
                <p>{props["title2"]}</p>
                <h6>${props["price"]}</h6>
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
                      { <a onClick={ ()=> click(props)} >
                        <i className="fa-regular fa-basket-shopping-simple" />
                      </a> }
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
              </div>
    </>
  )
}

export default Singledisc