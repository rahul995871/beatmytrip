// import './Home.css'
import './About.css'
import  about from "../images/about.jpg"
import { teamslide,testimonial } from "./Sliders";

function About() {
    return (
        <div>
        <div className="container-fluid home-bg position-relative" style={{backgroundImage:`url("${about}")`,height:"50vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
             <div className="home-title pt-5">  
                <h1 className=" mb-3">About Us</h1> 
               <p>Discover amzaing places at exclusive deals</p>
               {/* <a className="c-btn">Discover More</a> */}
               </div>

              
            </div> 

                   {/* ------------------testimonial--------------------- */}


        <div className="section m-0 test " style={{background:'white'}}>
            <div className="container">
            <div className="headings mb-5">
                <p className="text-dark cursive primary-color  fs-5 mb-" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="1000"> destinations </p>
                <h1 className="px-3 c-line text-dark" data-aos="fade-left" data-aos-delay="300"  data-aos-duration="1000">Why Choose Us</h1>

            </div>
                <div className="row justify-content-around gap-4">
                    <div className="col-md-3 text-center mb-md-0 mb-5" >
                    <div className="whychoose text-dark ">
                    <div>
                        <img src={require('../images/price.png')} style={{backgroundColor:'var(--primary-color)',border:'none'}}/>
                    </div>
                    <div>
                        <h6 className="my-3">Best Price Guarantee</h6>
                        <small className="fs-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-3 text-center mb-md-0 mb-5 ">
                    <div className="whychoose text-dark ">
                    <div>
                        <img src={require('../images/booking.png')} style={{backgroundColor:'var(--primary-color)',border:'none'}}/>
                    </div>
                    <div>
                        <h6 className="my-3">Easy & Quick Booking</h6>
                        <small className="fs-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-3 text-center mb-md-0 mb-5" >
                    <div className="whychoose text-dark ">
                    <div>
                        <img src={require('../images/customer.png')} style={{backgroundColor:'var(--primary-color)',border:'none'}}/>
                    </div>
                    <div>
                        <h6 className="my-3">Customer Care 24/7</h6>
                        <small className="fs-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                    </div>
                    </div>
                    </div>

                </div>

            </div>
        </div>

                      {/* ------------------testimonial-end-------------------- */}

                       {/* ------------------------whychoose--------------- */}
                  <div className="section m-0 bg-dark text-light">
                  <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="1000">
                            <img src={require('../images/whyus.png')} className="img-fluid"/>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <p className="cursive primary-color fs-4 px-3"data-aos="fade-left" data-aos-delay="300"  data-aos-duration="1000">About Us</p>
                                <h1 className="c-line position-relative px-3"data-aos="fade-left" data-aos-delay="200"  data-aos-duration="1200">Plan Your Trip with<br/>Trevily</h1>
                                <div className="mt-4" data-aos="fade-left" data-aos-delay="100"  data-aos-duration="1400">
                                <small className="text-light">
                                <span className="primary-color fs-5 fw-semibold">W</span>elcome to BeatsMyTrip, your gateway to unforgettable travel experiences in India! Founded just two years ago by a group of 18 well-experienced and trained travelers who have extensively explored every nook and cranny of this magnificent country, we are dedicated to making your journey through India seamless, enriching, and budget-friendly.
                                </small>
                                <br></br>
                                <br></br>
                                <small className="text-light">At BeatsMyTrip, we understand that each traveler is unique, with different preferences and interests. That’s why we take pride in curating personalized itineraries that cater to your specific needs, ensuring you get the most out of your trip. Whether you’re an adventure enthusiast seeking adrenaline-pumping activities, a nature lover yearning for serene landscapes, a history buff eager to unravel India’s rich heritage, or simply looking to immerse yourself in the vibrant cultures and traditions, we’ve got you covered.</small>
                           
                                </div>
                                </div>
                        </div>
                    </div>
                  </div>
                  </div>
                      {/* ------------------------whychoose-end--------------- */}



                      {/* ------------------trips-------------------- */}
        
            <div className="section m-0  " style={{background:'white'}}>
           <div className="container trips">
           <div className="headings mb-5">
                <p className="text-dark cursive primary-color  fs-5 mb-0" data-aos="fade-right" data-aos-delay="500"  data-aos-duration="1000">Destination lists</p>
                <h1 className="px-3 c-line"  data-aos="fade-left" data-aos-delay="500"  data-aos-duration="1000">Our Team</h1>

            </div>
            <div className="row">
                <div col-md-12>
                
                            {teamslide()}
                               

                </div>
            </div>

            </div>
            </div>

            {/* ------------------trips-end-------------------- */}

               {/* ------------------test--------------------- */}

                  <div className="section m-0 c-testimonial" style={{background:'white'}}>
                    <div className="container">
                        <div className="row justify-content-around align-items-center" >
                        <div className="col-md-4 text-center text-md-start" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="700">
                        <div className="">
               
                <h1 className="text-light mb-4">What Our Customers <span className='primary-color'>Say</span>?</h1>
                <p className="text-light mb-5 ">Fuerat aestu carentem habentia spectent</p>

            </div>
                        </div>

                        <div className="col-md-6"data-aos="fade-left" data-aos-delay="200"  data-aos-duration="1400">
                                {testimonial()}
                        </div>
                        </div>
                    </div>
                </div>



                {/* ------------------test-end-------------------- */}




        </div>
    );
}

export default About;