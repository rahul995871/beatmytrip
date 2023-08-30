import "../App.css";
import "./Home.css";

import homebg from "../images/h-2.jpg";
import {
  week,
  trip,
  testimonial,
  tripDatas,
  homeSlider,
} from "../components/Sliders";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { data, weekData } from "./Data";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export const testsec=()=>{
  return(<>
  <div
          className="section m-0 c-testimonial"
          style={{ background: "white" }}
        >
          <div className="container py-4">
            <div className="row justify-content-around align-items-center">
              <div
                className="col-md-4 text-center text-md-start"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="700"
              >
                <div className="">
                  <h1 className="text-light mb-4">
                    What Our Customers{" "}
                    <span className="primary-color">Say</span>?
                  </h1>
                  <small className="text-light mb-5 ">
                  Discover what our clients have to say about their extraordinary journeys with BMT
                  </small>
                </div>
              </div>

              <div
                className="col-md-6"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1400"
              >
                
                {testimonial()}
              </div>
            </div>
          </div>
        </div>
  </>)
}

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      
      <div className="section m-0 p-0 bg-white">
        <div className="container-fluid position-relative px-0 hh">
          {homeSlider()}
          <div className="home-title3">
            <h1 className=" mb-5 pb-2">
              <div className="n-logo ">
                <span className="animate__bounce animate__animated animate__delay-1s ">
                  {/* <img
                    src={require("../images/world4.png")}
                    className="world"
                  /> */}
                  Beats
                </span>{" "}
                <span className="">MyTrip</span>
              </div>
            </h1>
            <TypeAnimation
              sequence={[
                "Chalo Apko Ghumate...",
                1000,
                " or Firhate Hai...",
                1000,
                "",
                1000,
              ]}
              wrapper="h1"
              speed={25}
              style={{ fontSize: "1.3rem", display: "inline-block" }}
              repeat={Infinity}
              cursor={true}
              className="mb-2 "
            />
            {/* <p data-aos="fade-up" className="fs-6"  data-aos-delay="300" data-aos-duration="1000">
              Discover amzaing places at<br></br> exclusive deals
            </p> */}
            {/* <a className="c-btn">Discover More</a> */}
          </div>
        </div>
        {/* <div className="home-blob2">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7">
                
              <p className="fs-5 mb-4 my-md-3">
                Begin your adventurous journey here.
              </p>
            </div>
            <div className="col-md-5 text-center text-md-end">
              <HashLink
                to="/about/#"
                className="c-btn bg-white text-dark fw-semibold"
              >
                Get started
              </HashLink>
            </div>
          </div>
        </div> */}
      </div>

      <div>
        {/* ------------------------whychoose--------------- */}
        <div className="section m-0 bg-w">
          <div className="container ">
            <div className="row">
              <div
                className="col-md-6 "
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <img
                  src={require("../images/whyus.png")}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 ">
                <div>
                  <p
                    className="cursive primary-color fs-4 px-3"
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    About Us
                  </p>
                  <h1
                    className="c-line position-relative px-3"
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="1200"
                  >
                    Plan Your Trip with
                    <br />
                    BeatsMyTrip
                  </h1>
                  <div
                    className="mt-4"
                    data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-duration="1400"
                  >
                    <small className="text-dark">
                      <span className="primary-color fs-5 fw-semibold">W</span>
                      elcome to BeatsMyTrip, your gateway to unforgettable
                      travel experiences in India! Founded just two years ago by
                      a group of 18 well-experienced and trained travelers who
                      have extensively explored every nook and cranny of this
                      magnificent country, we are dedicated to making your
                      journey through India seamless, enriching, and
                      budget-friendly.
                    </small>
                    <br></br>
                    <br></br>
                    <small className="text-dark">
                      At BeatsMyTrip, we understand that each traveler is
                      unique, with different preferences and interests. That’s
                      why we take pride in curating personalized itineraries
                      that cater to your specific needs, ensuring you get the
                      most out of your trip. Whether you’re an adventure
                      enthusiast seeking adrenaline-pumping activities, a nature
                      lover yearning for serene landscapes, a history buff eager
                      to unravel India’s rich heritage, or simply looking to
                      immerse yourself in the vibrant cultures and traditions,
                      we’ve got you covered.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------whychoose-end--------------- */}

        {/* ------------------testimonial--------------------- */}

        <div className="section m-0 test bg-dark">
          <div className="container">
            <div className="headings mb-5">
              {/* <p
                className="text-dark cursive primary-color  fs-5 fw-semibold"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                {" "}Your Travel, Your Way{" "}
              </p> */}
              <h1
                className="px-3 c-line text-light"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                Why Choose Us
              </h1>
            </div>
            <div className="row justify-content-around gap-4">
              <div
                className="col-md-3 text-center mb-md-0 mb-5 "
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <div className="whychoose text-white ">
                  <div>
                    <img src={require("../images/price.png")} />
                  </div>
                  <div>
                    <h6 className="my-3">Best Price Guarantee</h6>
                    <small className="fs-7">
                     Our commitment to delivering value for your money means that you can expect top-notch service and experiences without compromising your financial plans.
                    </small>
                  </div>
                </div>
              </div>

              <div
                className="col-md-3 text-center mb-md-0 mb-5 "
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="whychoose text-white ">
                  <div>
                    <img src={require("../images/booking.png")} />
                  </div>
                  <div>
                    <h6 className="my-3">Easy & Quick Booking</h6>
                    <small className="fs-7">
                    We are passionate travelers ourselves,and our deep understanding of various destinations sets<br></br> us apart. 
                    </small>
                  </div>
                </div>
              </div>

              <div
                className="col-md-3 text-center mb-md-0 mb-5"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                <div className="whychoose text-white ">
                  <div>
                    <img src={require("../images/customer.png")} />
                  </div>
                  <div>
                    <h6 className="my-3">Customer Care 24/7</h6>
                    <small className="fs-7">
                    Our dedicated support team is available around the clock to assist you, whether you need last-minute changes or have questions while on the road.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------testimonial-end-------------------- */}

        {/* ------------------------carousal--------------- */}
        {/* <div className="section m-0 bg-w" >
                  <div className="container">
                  <div className="headings mb-5" >
                <p className="text-dark cursive primary-color  fs-5 mb-0" data-aos="fade-right" data-aos-delay="500"  data-aos-duration="1000"> destinations </p>
                <h1 className="px-3 c-line"data-aos="fade-left" data-aos-delay="500"  data-aos-duration="1000">Popular Destinations</h1>

            </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="products">
                            {week()}
                                </div>

                            </div>

                        </div>
                    </div>
                  </div> */}

        {/* ------------------------carousal-end--------------- */}

        {/* ------------------weekends-------------------- */}

        <div className="section m-0 bg-white" id="wt">
          <div className="container week">
            <div className="headings mb-5">
              <p
                className="text-dark cursive primary-color  fs-5 mb-0"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                Short on Time, High on Adventure
              </p>
              <h1
                className="px-3 c-line "
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                Weekend Trips
              </h1>
            </div>
            <div className="row g-2">
              {weekData.map((e) => {
                return (
                  <>
                    <div
                      className={` ${e.colsize} rounded position-relative`}
                      data-aos={e.dataaos}
                      data-aos-delay="500"
                      data-aos-duration="1200"
                    >
                      <a
                        className="c-overlay d-block position-relative"
                        onClick={() =>
                          navigate("/itenary/#", {
                            state: `${JSON.stringify(e.data)}`,
                          })
                        }
                      >
                        <img className="rounded " src={e.weekimg} />
                        <h4 className="weektitle text-capitalize">
                          {e.data.maintitle}
                        </h4>
                      </a>
                    </div>
                  </>
                );
              })}

              {/* <div className="col-md-3 rounded position-relative" data-aos="flip-right" data-aos-delay="500"  data-aos-duration="1200">
                                <HashLink to='/itenary/#'>
                                <img className="rounded" src={require('../images/week1.png')}/>
                                <h4 className="weektitle">Kerala</h4>
                                </HashLink>
                            </div>
                            <div  className="col-md-6 rounded position-relative"data-aos="fade-down" data-aos-delay="500"  data-aos-duration="1200">
                            <HashLink to='/itenary/#'>
                            <img className="rounded" src={require('../images/week2.png')}/>
                            <h4 className="weektitle">Ladakh</h4>
                                </HashLink>
                           
                           
                            </div>
                            <div className="col-md-3 rounded position-relative" data-aos="flip-left" data-aos-delay="500"  data-aos-duration="1200">
                            <HashLink to='/itenary/#'>
                            <img className="rounded" src={require('../images/week3.png')}/>
                            <h4 className="weektitle">Risikesh</h4>
                                </HashLink> 
                           
                            </div>

                            <div  className="col-md-6 rounded position-relative" data-aos="fade-right" data-aos-delay="500"  data-aos-duration="1200">
                            <HashLink to='/itenary/#'>
                            <img className="rounded"  src={require('../images/week4.png')}/>
                            <h4 className="weektitle">Bhopal</h4>
                                </HashLink> 
                            
                            </div>
                            <div  className="col-md-6 rounded position-relative" data-aos="fade-left" data-aos-delay="500"  data-aos-duration="1200">
                            <HashLink to='/itenary/#'>
                            <img  className="rounded" src={require('../images/week5.png')}/>
                            <h4 className="weektitle">Meghalaya</h4>
                                </HashLink> 
                           
                            </div> */}
            </div>

            {/* <div className="row gx-2 mt-3">
                            <div  className="col-md-6 rounded position-relative">
                            <img className="rounded"  src={require('../images/week4.png')}/>
                            <h4 className="weektitle">London</h4>
                            </div>
                            <div  className="col-md-6 rounded position-relative">
                            <img  className="rounded" src={require('../images/week5.png')}/>
                            <h4 className="weektitle">London</h4>
                            </div>
                            
                            

                        </div> */}
          </div>
        </div>

        {/* ------------------weekends-end-------------------- */}

        {/* ------------------trips-------------------- */}

        <div className="section m-0 " id="bt">
          <div className="container trips">
            <div className="headings mb-5">
              <p
                className="text-dark cursive primary-color  fs-5 mb-0"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
               Your Backpack, Our Expertise
              </p>
              <h1
                className="px-3 c-line"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                Backpacking Trips
              </h1>
            </div>
            <div className="row">
              <div col-md-12>{trip()}</div>
            </div>
          </div>
        </div>

        {/* ------------------trips-end-------------------- */}

        {/* ------------------test--------------------- */}

        {testsec()}

        {/* ------------------test-end-------------------- */}
      </div>
    </div>
  );
}

export default Home;
