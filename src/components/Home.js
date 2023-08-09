
import  "../App.css"
import  "./Home.css"
import  homebg from "../images/home.jpg.webp"
import {week,trip,testimonial} from '../components/Sliders'

function Home() {


    return (
        <div>
            <div className="container-fluid home-bg " style={{backgroundImage:`url("${homebg}")`}}>
             <div className="home-title">  
                <h1 className=" mb-3">Find Next Place To Visit</h1> 
               <p>Discover amzaing places at exclusive deals</p>
               {/* <a className="c-btn">Discover More</a> */}
               </div>

               <div className="home-blob">
               <div className="row justify-content-center align-items-center">
                <div className="col-md-7">
                <p className="fs-5 mb-4">Begin your adventurous journey here.</p>
                </div>
                <div className="col-md-5 text-center text-md-end">

                <a className="c-btn bg-white text-dark fw-semibold">Get started</a>
                </div>

               </div>
               </div>
            </div>
            <div>


            
                  {/* ------------------------whychoose--------------- */}
                  <div className="section m-0 bg-white">
                  <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={require('../images/whyus.png')} className="img-fluid"/>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <p className="cursive primary-color fs-4 px-3">About Us</p>
                                <h1 className="c-line position-relative px-3">Plan Your Trip with<br/>Trevily</h1>
                                <div className="mt-4">
                                <small className="text-dark">
                                <span className="primary-color fs-5 fw-semibold">W</span>elcome to BeatsMyTrip, your gateway to unforgettable travel experiences in India! Founded just two years ago by a group of 18 well-experienced and trained travelers who have extensively explored every nook and cranny of this magnificent country, we are dedicated to making your journey through India seamless, enriching, and budget-friendly.
                                </small>
                                <br></br>
                                <br></br>
                                <small className="text-dark">At BeatsMyTrip, we understand that each traveler is unique, with different preferences and interests. That’s why we take pride in curating personalized itineraries that cater to your specific needs, ensuring you get the most out of your trip. Whether you’re an adventure enthusiast seeking adrenaline-pumping activities, a nature lover yearning for serene landscapes, a history buff eager to unravel India’s rich heritage, or simply looking to immerse yourself in the vibrant cultures and traditions, we’ve got you covered.</small>
                           
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
                <div className="row justify-content-around gap-4">
                    <div className="col-md-3 text-center mb-md-0 mb-5">
                    <div className="whychoose text-white ">
                    <div>
                        <img src={require('../images/price.png')}/>
                    </div>
                    <div>
                        <h6 className="my-3">Best Price Guarantee</h6>
                        <small className="fs-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-3 text-center mb-md-0 mb-5 ">
                    <div className="whychoose text-white ">
                    <div>
                        <img src={require('../images/booking.png')}/>
                    </div>
                    <div>
                        <h6 className="my-3">Easy & Quick Booking</h6>
                        <small className="fs-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-3 text-center mb-md-0 mb-5">
                    <div className="whychoose text-white ">
                    <div>
                        <img src={require('../images/customer.png')}/>
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



                  {/* ------------------------carousal--------------- */}
                  <div className="section m-0 bg-white" >
                  <div className="container">
                  <div className="headings mb-5">
                <p className="text-dark cursive primary-color  fs-5 mb-0"> destinations </p>
                <h1 className="px-3 c-line">Popular Destinations</h1>

            </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="products">
                            {week()}
                                </div>

                            </div>

                        </div>
                    </div>
                  </div>

                       {/* ------------------------carousal-end--------------- */}



            {/* ------------------trips-------------------- */}
        
            <div className="section m-0 ">
           <div className="container trips">
           <div className="headings mb-5">
                <p className="text-dark cursive primary-color  fs-5 mb-0">Destination lists</p>
                <h1 className="px-3 c-line">Backpacking Trips</h1>

            </div>
            <div className="row">
                <div col-md-12>
                
                            {trip()}
                               

                </div>
            </div>

            </div>
            </div>

            {/* ------------------trips-end-------------------- */}


            {/* ------------------weekends-------------------- */}

           <div className="section m-0 bg-white">
           <div className="container week">

            <div className="headings mb-5">
                <p className="text-dark cursive primary-color  fs-5 mb-0">Destination lists</p>
                <h1 className="px-3 c-line ">Weekend Trips</h1>

            </div>
                        <div className="row g-2">
                            <div className="col-md-3 rounded position-relative">
                                <img className="rounded" src={require('../images/week1.png')}/>
                                <h4 className="weektitle">Kerala</h4>
                            </div>
                            <div  className="col-md-6 rounded position-relative">
                            <img className="rounded" src={require('../images/week2.png')}/>
                            <h4 className="weektitle">Ladakh</h4>
                            </div>
                            <div className="col-md-3 rounded position-relative">
                            <img className="rounded" src={require('../images/week3.png')}/>
                            <h4 className="weektitle">Risikesh</h4>
                            </div>

                            <div  className="col-md-6 rounded position-relative">
                            <img className="rounded"  src={require('../images/week4.png')}/>
                            <h4 className="weektitle">Bhopal</h4>
                            </div>
                            <div  className="col-md-6 rounded position-relative">
                            <img  className="rounded" src={require('../images/week5.png')}/>
                            <h4 className="weektitle">Meghalaya</h4>
                            </div>
                            
                            

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

               {/* ------------------test--------------------- */}

                <div className="section m-0 c-testimonial">
                    <div className="container">
                        <div className="row justify-content-around align-items-center" >
                        <div className="col-md-4 text-center text-md-start">
                        <div className="">
               
                <h1 className="text-light mb-4">What Our Customers Say?</h1>
                <p className="text-light mb-5">Fuerat aestu carentem habentia spectent</p>

            </div>
                        </div>

                        <div className="col-md-6">
                                {testimonial()}
                        </div>
                        </div>
                    </div>
                </div>


                {/* ------------------test-end-------------------- */}

               

                </div>
        </div>
    );
}

export default Home;