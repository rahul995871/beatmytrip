import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import left from '../images/left.png'
import right from '../images/right.png'
import "../App.css"

import './Slider.css'
import aa from '../images/aa.png'
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { data, homeData } from "./Data";
import { useState } from "react";



// --------home----
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <small className="text text-black ">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide primary-color fw-semibold">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </small>
  );
};
export  const homeSlider = function Sliders() {
  const navigate =useNavigate()
  
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
      fade: true,
      infinite: true,
      autoplay: true,
      draggable:true,
  
      
      speed: 1500,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'ease-in-out',
      lazyLoad: 'progressive',
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        
      };
    return (
      <div>
       
         
          
        
  
          {/* //////////////////////// */}
  
        <Slider {...settings} className="h-overlay position-relative">
  
        {homeData.map((e)=>{
    return(
      <>
      <div className="slideshow sliderimg" style={{
          backgroundImage: `url("${e.img}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height:"100vh"
        
        }}>
      
         
        
      </div>
      
      </>
    )
  })}
  
         
  
        </Slider>
  
          {/* //////////////////////// */}
          
         
  
    
      </div>
    );
  }
  


// -----home-end--




//  export  const week = function Sliders() {

//   const sliderData=[{
//     title:"Kerala",
//     img:require('../images/pro1.jpg')


// },
// {
//   title:"Ladakh",
//   img:require('../images/pro2.jpg')


// },
// {
//   title:"Nepal",
//   img:require('../images/pro3.jpg')


// },
// {
//   title:"Risikesh",
//   img:require('../images/pro4.jpg')


// },
// {
//   title:"Ladakh",
//   img:require('../images/pro2.jpg')


// },
// {
//   title:"Kerala",
//   img:require('../images/pro1.jpg')


// },

// ]


// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     // <i class="fa-solid fa-arrow-right"></i>
//     <div
//       className={`${className} fa-solid fa-arrow-right`}
//       style={{ ...style}}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style}}
//       onClick={onClick}
//     />
//   );
// }
//     const settings = {
//       dots: true,
//       infinite: true,
//       autoplay:true,
//       // autoplaySpeed: 3000,
//       speed: 1000,
      
  
//       slidesToShow: 4,
//       slidesToScroll: 3,
//       initialSlide: 0,
//       nextArrow: <SampleNextArrow />,
//       prevArrow: <SamplePrevArrow />,
//       responsive: [
//         {
//           breakpoint: 1024,
        
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true,
            
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2,
//             arrows: false
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: false
//           }
//         }
//       ]
//     };
//   return (
//     <div>
     
       
        
      

//         {/* //////////////////////// */}

//       <Slider {...settings} className="pro">

//       {sliderData.map((e)=>{
//   return(
//     <>
//      <div className="pro-c" >
//     <div className="pp">
//       <h4 className="title">{e.title}</h4>
//       <img src={e.img}/>
//     </div>
//         </div>
//     </>
//   )
// })}

       

//       </Slider>

//         {/* //////////////////////// */}
        
       

  
//     </div>
//   );
// }


export  const trip = function Sliders() {
const navigate =useNavigate()

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
      infinite: false,
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

      {data.map((e)=>{
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
    <p className="text-dark fs-6"> <small className="primary-color fw-semibold ">{e.nd} </small></p>
  </div>
    <div className=" my-4 pb-3 text-center">
      <a  onClick={()=>navigate('/itenary/#',{state:`${JSON.stringify(e.data) }`})} className="c-btn">Learn More</a>
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
    title:"Himani Bisht",
    des:"Founder & CEO",
    img:require('../images/himani.jpg')



},
{
  title:"Ravi Rautela",
  des:"CEO",
  img:require('../images/ravi.jpg')


},
{
  title:"Rahul Rautela",
  des:"IT/Web Developer",
  img:require('../images/rahul.jpg')


},
{
  title:"Rohit Kumar",
  des:"Ground Operation",
  img:require('../images/rohit.jpg')


},
{
  title:"Anshu Bisht",
  des:"Ground Operation",
  img:require('../images/anshu.jpg')


},
{
  title:"Shanu Nirmal",
  des:"SEO/Digital Marketing",
  img:require('../images/shanu.jpg')


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
      // infinite: true,
      autoplay:true,
      speed: 500,
  
      slidesToShow: 4,
      slidesToScroll: 1,
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
      {/* <a><img src={require('../images/fb1.png')}/>    </a> */}
      <a href="https://www.instagram.com/beats_mytrip/" target="_blank">
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
    title:"Have travelled Kerala this week with BMT. I have very good experience with the team.They provided good car and good accommodation as well. It's completely safe for solo women travelers also.I would recommend them completely for the trips.",
   name:"Moumita Ghosh",
    img: require('../images/t-1.jpg'),

},
{
  title:"Went with BMT to Bir Billing for the paragliding experience.Transit was good. Buses were on schedule and no unnecessary stops were made. The place of stay was very decent, some distance away from the main city with picture-perfect landscape. Food was standard; nothing out of ordinary. Met some wonderful people along the way and overall it was a great, fun experience.They accomodated us on a 1.5 day notice, organisation was quite well. Would recommend travellling with them, and probably would travel with them again :)",
 name:"Shubham Vashishth",
  img: require('../images/t-3.jpg'),

},
{
  title:"One of my best trips ever, full with diverse experiences. Especially the driver was very well experienced and humble to drive safely throughout our trip. Seriously, I had a wonderful experience in my dream place, Spiti, with a variety of hotels, sights of monasteries, and palaces. Congratulations and a heartfelt thank you to everyone involved; the driver, trip organiser, and employees at each hotel were warm and accommodating, and they helped to make my trip a truly special one. BeatsMyTrip company has certainly delivered a professional and truly high standard of service and recommends to any visitor you are certainly in very good hands. It's an awesome trip. Thanks a lot.",
 name:"Rajiv Choudhary",
  img: require('../images/t-2.JPG'),

},
{
  title:"It was our first Girls trip and it was great experience to plan with BeatsMyTrip. Everything was properly planned. Hotels, cab, itinerary all things were very good and we didn't feel any problem at any place. Homestays were very good and food was also good. Every stay was planned according to our destination. BeatsMyTrip team was very helpful. They made our trip totally memorable💜💜  We will surely recommend BMT to everyone for their trips. THANK YOU😊",
 name:"Harshita Pandey",
  img: require('../images/t-4.jpg'),

},
{
  title:"It's been a great experience travelling with BeatsMyTrip. The driver is also very courteous, and speaking of lodging, all of the accommodations were fantastic, especially the Munnar homestay.Last but not least, if you're looking for the best expeditions in Kerala at the lowest price, BeatsMyTrip is the therefor you. ",
 name:"yash talhan",
  img: require('../images/t-5.jpg'),

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
     
    
          {/* <small className=" text-dark">{e.title}</small> */}
          <ReadMore className=" text-dark">
          {e.title}
        </ReadMore>
        <div className="test-img"><img src={e.img} /></div>
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