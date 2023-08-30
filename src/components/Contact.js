import contact from "../images/contact.jpg";
import contactSide from "../images/contact-side.svg";
import "./Contact.css";
import { Link } from "react-router-dom";
function Contact(props) {
  return (
    <div>
      <div
        className="container-fluid home-bg position-relative"
        style={{ background: `url("${contact}")`, height: "50vh" ,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
      >
        <div className="home-title pt-5">
          <h1 className=" mb-3">Contact Us</h1>
          {/* <p>Discover amzaing places at exclusive deals</p> */}
          {/* <a className="c-btn">Discover More</a> */}
        </div>
      </div>

      {/* ------------------testimonial--------------------- */}

      <div className="section m-0  bg-w">
        <div className="container">
          <div className="headings mb-5">
            <p className="text-dark cursive primary-color  fs-5">
              {" "}
              Get in touch with us.{" "}
            </p>
          </div>
          <div className="row justify-content-around gx-5  pt-4">
            <div className="col-md-4 text-center mb-md-0 mb-5 " data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
              <div className=" cccc">
                <div className="imgg">
                  <img src={require("../images/phone.png")} />
                </div>
                <div>
                  {/* <Link to="tel:919910170917" className="text-decoration-none"><small className="m-0 text-dark fw-semibold">
                    +91 9910170917
                  </small></Link> */}
                  
                  <Link to="tel:918750562321" className="text-decoration-none"><small className="m-0 text-dark fw-semibold">
                    +91 8750562321
                  </small></Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center mb-md-0 mb-5 " data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1300">
              <div className=" cccc">
                <div className="imgg">
                  <img src={require("../images/email.png")} />
                </div>
                <div>
                <Link to="mailto:info@beatsmytrip.com" className="text-decoration-none"><small className="m-0 text-dark fw-semibold">
                info@beatsmytrip.com
                  </small></Link>
                  <br></br>
                 
                  {/* <Link to="mailto: ravirautela661@gmail.com"  className="text-decoration-none"><small className="m-0 text-dark fw-semibold">
                  ravirautela661@gmail.com
                  </small></Link> */}
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center mb-md-0 mb-5" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500">
              <div className=" cccc">
                <div className="imgg">
                  <img src={require("../images/location.png")} />
                </div>
                <div>
                  <small className="text-dark fw-semibold">
                    112th Avenue, Gaur City 2,Noida - 201305{" "}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------testimonial-end-------------------- */}

      <div className="section m-0 p-0">
        <div>
        <iframe
                  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d112051.88160184269!2d77.17874054329445!3d28.641110023572818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d28.59008!2d77.2407296!4m5!1s0x390cfd69d79321ef%3A0xb6c95c497185f13c!2sbeatsmytrip!3m2!1d28.7001314!2d77.2588754!5e0!3m2!1sen!2sin!4v1691657386951!5m2!1sen!2sin"
                  width="100%"
                  height="350px"
                  style={{border:'0'}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
        </div>
      </div>

      {/* <div className="section m-0 gg">
        <div className="container">
        <div className="headings mb-5">
                <p className="text-dark cursive primary-color  fs-5 mb-0">Get in touch with us.</p>
               

            </div>
          <div className="row g-0 justify-content-center">
            <div className="col-md-6 col-lg-5 bg-dark">
              <div className="contact-icon p-4 p-md-5">
                <p className="">Get in touch with us by dialing the number or via email.</p>
                <a className="contact-list">
                  <div className="contact-img">
                    <img src={require("../images/phone.png")} />
                  </div>
                  <small className="m-0 text-light">+91 8750562321</small>
                </a>

                <a className="contact-list">
                          <div className="contact-img">
                          <img src={require('../images/email.png')}/>
                          </div>
                            <small className="text-light">nfo@beatsmytrip.com</small>
                        </a>

                        <a className="contact-list">
                        <div className="contact-img">
                        <img src={require('../images/location.png')}/>
                            </div>
                           
                            <small className="text-light">112th Avenue, Gaur City 2,<br></br>Noida - 201305 </small>
                        </a> 
              
              </div>
            </div>
            <div className="col-md-6">
   


             <div className="c-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d112051.88160184269!2d77.17874054329445!3d28.641110023572818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d28.59008!2d77.2407296!4m5!1s0x390cfd69d79321ef%3A0xb6c95c497185f13c!2sbeatsmytrip!3m2!1d28.7001314!2d77.2588754!5e0!3m2!1sen!2sin!4v1691657386951!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{border:'0'}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> 
            </div>


   


          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Contact;
