import './Footer.css'

function Footer() {
    return (
        <>
         <div className="section bg-dark m-0 py-4">
            <div className='footer-icon'>
                <img src={require('../images/whatsapp-w.png')}/>
            </div>
            <div className="container">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-md-10">
                    <p className="fs-7">112th Avenue, Gaur City 2, Noida - 201305 | Phone: +91 8750562321 | Email: info@beatsmytrip.com</p>
                    <p className="fs-7 mb-0">Copyright © 2023 BeatsMyTrip</p>
                    </div>
                    
                </div>

            </div>
            
            </div>
        </>
       
    );
}

export default Footer;