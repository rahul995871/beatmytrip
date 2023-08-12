import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import left from '../images/left.png'
import right from '../images/right.png'
import "../App.css"

import './Slider.css'
import aa from '../images/aa.png'
import { HashLink } from "react-router-hash-link";




 export  const week = function Sliders() {

  const sliderData=[{
    title:"Kerala",
    img:require('../images/pro1.jpg')


},
{
  title:"Ladakh",
  img:require('../images/pro2.jpg')


},
{
  title:"Nepal",
  img:require('../images/pro3.jpg')


},
{
  title:"Risikesh",
  img:require('../images/pro4.jpg')


},
{
  title:"Ladakh",
  img:require('../images/pro2.jpg')


},
{
  title:"Kerala",
  img:require('../images/pro1.jpg')


},

]


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <i class="fa-solid fa-arrow-right"></i>
    <div
      className={`${className} fa-solid fa-arrow-right`}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}
    const settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      // autoplaySpeed: 3000,
      speed: 1000,
      
  
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
        
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    };
  return (
    <div>
     
       
        
      

        {/* //////////////////////// */}

      <Slider {...settings} className="pro">

      {sliderData.map((e)=>{
  return(
    <>
     <div className="pro-c" >
    <div className="pp">
      <h4 className="title">{e.title}</h4>
      <img src={e.img}/>
    </div>
        </div>
    </>
  )
})}

       

      </Slider>

        {/* //////////////////////// */}
        
       

  
    </div>
  );
}


export  const trip = function Sliders() {

  const tripData=[{
    title:"Meghalaya Backpack",
    img:require('../images/trip.jpg'),
    links:'/itenary'


},
{
  title:"Meghalaya Backpack",
  img:require('../images/trip2.jpg'),
  links:'/itenary'


},
{
  title:"Meghalaya Backpack",
  img:require('../images/trip.jpg'),
  links:'/itenary'


},
{
  title:"Meghalaya Backpack",
  img:require('../images/trip2.jpg'),
  links:'/itenary'


},
{
  title:"Meghalaya Backpack",
  img:require('../images/trip.jpg'),
  links:'/itenary'


},
{
  title:"Meghalaya Backpack",
  img:require('../images/trip2.jpg'),
  links:'/itenary'


},

]


 
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      // <i class="fa-solid fa-arrow-right"></i>
      <div
        className={`${className} fa-solid fa-arrow-right`}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }
    const settings = {
      dots: true,
      infinite: true,
      autoplay:false,
      speed: 500,
  
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    };
  return (
    <div>
     
       
        
      

        {/* //////////////////////// */}

      <Slider {...settings} className="pro">

      {tripData.map((e)=>{
  return(
    <>
     <div className="pro-c">
    <div className="trip bg-white text-center">
  <div className="position-relative  ">
    {/* <div className="overlay"></div> */}
  <img src={e.img} className="my-4"/>
  </div>
 
 <div className="my-4">
 <div className="des my-4 px-3">
  <h6 className="trip-title position-relative ">{e.title}</h6>
    <p className="text-dark fs-6"> <small className="primary-color fw-semibold ">(5N/6D) </small><small className="fs-7">/ Per Person</small></p>
  </div>
    <div className=" my-4 pb-3 text-center">
      <HashLink to={e.links} className="c-btn">Learn More</HashLink>
    </div>
 </div>
      
    </div>
        </div>
    </>
  )
})}

       

      </Slider>

        {/* //////////////////////// */}
        
       

  
    </div>
  );
}


export  const teamslide = function Sliders() {

  const team=[{
    title:"Ravi Rautela",
    des:"Founder & CEO",
    img:require('../images/trip.jpg')



},
{
  title:"Ravi Rautela",
  des:"Founder & CEO",
  img:require('../images/trip2.jpg')


},
{
  title:"Ravi Rautela",
  des:"Founder & CEO",
  img:require('../images/trip.jpg')


},
{
  title:"Ravi Rautela",
  des:"Founder & CEO",
  img:require('../images/trip2.jpg')


},
{
  title:"Ravi Rautela",
  des:"Founder & CEO",
  img:require('../images/trip.jpg')


}


]


 
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      // <i class="fa-solid fa-arrow-right"></i>
      <div
        className={`${className} fa-solid fa-arrow-right`}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }
    const settings = {
      dots: true,
      infinite: true,
      autoplay:false,
      speed: 500,
  
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    };
  return (
    <div>
     
       
        
      

        {/* //////////////////////// */}

      <Slider {...settings} className="pro">

      {team.map((e)=>{
  return(
    <>
     <div className="pro-c">
    <div className="trip team bg-grey text-center">
  <div className="position-relative  ">
    {/* <div className="overlay"></div> */}
  <img src={e.img} className="my-4"/>
  </div>
 
 <div className="my-4">
 <div className="des my-4 px-3">
  <h6 className="trip-title position-relative ">{e.title}</h6>
    <p className="text-dark fs-6"> <small className="primary-color fw-semibold ">{e.des}</small></p>
  </div>
    <div className=" my-4 pb-3 text-center social-icon d-flex flex-wrap justify-content-center gap-3">
      <a>
        <img src={require('../images/fb1.png')}/>
      </a>
      <a>
        <img src={require('../images/insta.png')}/>
      </a>
      
     
    </div>
 </div>
      
    </div>
        </div>
    </>
  )
})}

       

      </Slider>

        {/* //////////////////////// */}
        
       

  
    </div>
  );
}



// -----------------test------
export  const testimonial = function Sliders() {

  const testimonialdata=[{
    title:"Thank you BMT for an amzing experience to Kerala. Our trip to Kerala is an awesome. In Munnar the property the location the people the food everything is so good, Boathouse experience was awesome. Property in Thekkady is also one of the best property. Thank you BMT 🙂",
   name:"Custome Johi"


},
{
  title:"Thank you BMT for an amzing experience to Kerala. Our trip to Kerala is an awesome. In Munnar the property the location the people the food everything is so good, Boathouse experience was awesome. Property in Thekkady is also one of the best property. Thank you BMT 🙂",
 name:"Custome Johi"


},
{
  title:"Thank you BMT for an amzing experience to Kerala. Our trip to Kerala is an awesome. In Munnar the property the location the people the food everything is so good, Boathouse experience was awesome. Property in Thekkady is also one of the best property. Thank you BMT 🙂",
 name:"Custome Johi"


},




]


 
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      // <i class="fa-solid fa-arrow-right"></i>
      <div
        className={`${className} fa-solid fa-arrow-right`}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay:true,
      slidesToScroll: 1
    };
  return (
    <div>
     
       
        
      

        {/* //////////////////////// */}

      <Slider {...settings} className="pro">

      {testimonialdata.map((e)=>{
  return(
    <>
     <div className="test-card py-5 px-5 text-center ">
    
          <small className=" text-dark">{e.title}</small>
          <p className="mt-3 mb-0 pb-0 fw-semibold text-dark">-{e.name}</p>
        </div>
    </>
  )
})}

       

      </Slider>

        {/* //////////////////////// */}
        
       

  
    </div>
  );
}
// export default Sliders;