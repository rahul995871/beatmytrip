import { Link } from 'react-router-dom';
import './Footer.css'
import './Home.css'


function Footer() {
    return (
        <>
         <div className="section bg-dark m-0 py-4">
            {/* <Link to="https://wa.me/919910170917" target='_blank'>
            <div className='footer-icon'>
                <img src={require('../images/whatsapp-w.png')}/>
            </div>
            </Link> */}


<div class="social-fixed">
         
         <a href="https://wa.me/918750562321" class="social-icon" target="blank">
         <i class="fa-brands fa-whatsapp"></i>
            </a>

            <a href="https://www.instagram.com/beats_mytrip/" class="social-icon" target="blank">
            <i class="fa-brands fa-instagram"></i>
            </a>

      
</div>
           
            <div className="container pb-5 mb-5">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-md-10">
                    <p className="fs-7">112th Avenue, Gaur City 2, Noida - 201305 | Phone: +91 8750562321 | Email: info@beatsmytrip.com</p>
                    <p className="fs-7 mb-0">Copyright © 2023 BeatsMyTrip | Developed  by <a href='tel:919958718364' className='text-white bg-primary text-decoration-none p-1 rounded'>Rahul Rautela</a></p>
                    </div>
                    
                </div>

            </div>
            
            </div>
        </>
       
    );
}

export default Footer;