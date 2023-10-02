// import './Home.css'
import "./About.css";
import about from "../images/about.jpg";
import { teamslide, testimonial } from "./Sliders";
import { AboutSec, TestSec, WhySec } from "./Home";
import { useEffect } from "react";


  
function About() {
  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])
  return (
    <div>
      <div
        className="container-fluid home-bg position-relative"
        style={{
          backgroundImage: `url("${about}")`,
          height: "50vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="home-title pt-5">
          <h1 className=" mb-3">About Us</h1>
          {/* <p>Discover amzaing places at exclusive deals</p> */}
          {/* <a className="c-btn">Discover More</a> */}
        </div>
      </div>

      {/* ------------------testimonial--------------------- */}

      <WhySec toggle={true}></WhySec>

      {/* ------------------testimonial-end-------------------- */}

      {/* ------------------------whychoose--------------- */}
      <AboutSec toggle={true}></AboutSec>
      {/* ------------------------whychoose-end--------------- */}

      {/* ------------------trips-------------------- */}

      <div className="section m-0  " style={{ background: "white" }}>
        <div className="container trips">
          <div className="headings mb-5">
            <p
              className="text-dark cursive primary-color  fs-5 mb-0"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Meet the Faces Behind
            </p>
            <h1
              className="px-3 c-line"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Our Team
            </h1>
          </div>
          <div className="row">
            <div col-md-12>{teamslide()}</div>
          </div>
        </div>
      </div>

      {/* ------------------trips-end-------------------- */}

      {/* ------------------test--------------------- */}

      <TestSec></TestSec>

      {/* ------------------test-end-------------------- */}
    </div>
  );
}

export default About;
