import './Itenary.css'
import itenary from "../images/itenary.jpg";
function Itenary() {
    return (
        <div>
             <div
        className="container-fluid home-bg position-relative"
        style={{ background: `url("${itenary}")`, height: "50vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
      >
        <div className="home-title pt-5">
          <h1 className=" mb-3">Megahayla Tour</h1>
          <p>Discover amzaing places at exclusive deals</p>
          {/* <a className="c-btn">Discover More</a> */}
        </div>
      </div>


            {/* ---------------details-------------- */}

            <div className="section m-0 bg-white pt-4 mt-3">
                <div className="container">
                    <div className="row  align-items-start">
                        <div className="col-md-8 mb-3">
                        <div className="itenary-heading row ">
                   <div className="col-md-7">
                   <h1 className='fs-4'>London to Ancient Rome Short</h1>
                   <small className=''>LOrema darta cimidhn hekdu</small>
                   </div>
                   <div className="col-md-1">
                    <img className='img-fluid' src={require('../images/download.png')}/>
                   </div>
                        </div>

        <hr></hr>

        <div className='row'>
            <div className='col-md-4 mb-3 mt-3'>
                <div className='task-card'>
                    <img src={require('../images/day.png')}/>
                    <small className='m-0 text-dark '>5 Days</small>
                </div>
            </div>

            <div className='col-md-4 mb-3 mt-3'>
                <div className='task-card'>
                    <img src={require('../images/people.png')}/>
                    <small className='m-0 text-dark '>Max People : 26</small>
                </div>
            </div>
            <div className='col-md-4 mb-3 mt-3'>
                <div className='task-card'>
                    <img src={require('../images/tag.png')}/>
                    <small className='m-0 text-dark '>Price : 2,999</small>
                </div>
            </div>
            <div className='col-md-4 mb-3 mt-3'>
                <div className='task-card'>
                    <img src={require('../images/date.png')}/>
                    <small className='m-0 text-dark '>Jan 18’ - Dec 21'</small>
                </div>
            </div>
            <div className='col-md-4 mb-3 mt-3'>
                <div className='task-card'>
                    <img src={require('../images/age.png')}/>
                    <small className='m-0 text-dark '>Min Age : 10+</small>
                </div>
            </div>
            <div className='col-md-4 mb-3 mt-3'>
                <div className='task-card'>
                    <img src={require('../images/pickup.png')}/>
                    <small className='m-0 text-dark '>Pickup: Airpot</small>
                </div>
            </div>

            

            
        </div>

        <hr></hr>



        <div>
        <>
  <nav className='mt-4'>
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
      <button
        className="nav-link active"
        id="nav-home-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-home"
        type="button"
        role="tab"
        aria-controls="nav-home"
        aria-selected="true"
      >
        Itinerary
      </button>
      <button
        className="nav-link"
        id="nav-profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-profile"
        type="button"
        role="tab"
        aria-controls="nav-profile"
        aria-selected="false"
      >
        Inclusion
      </button>
      <button
        className="nav-link"
        id="nav-contact-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-contact"
        type="button"
        role="tab"
        aria-controls="nav-contact"
        aria-selected="false"
      >
                Exclusion

      </button>
     
    </div>
  </nav>
  <div className="tab-content" id="nav-tabContent">
    <div
      className="tab-pane fade show active"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
      tabIndex={0}
    >
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div className='itenary-btn'>
        <div><img src={require('../images/goal.png')}/></div>
        <small className='m-0 fw-semibold'>Day 1</small>
          
        </div>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <ul class="itenary-list p-3 pt-1 pb-0 mx-2">
  <li class="itenary-list-child"><small>Airport pick up by 12 noon.
</small></li>
  <li class="itenary-list-child"><small>Road trip to Shillong (approx 4 hours).
</small></li>
  <li class="itenary-list-child"><small>Visit Purva Tirupati Sri Balaji Temple & Barapani Lake (Umiam) on the way to Shillong.
</small></li>
   <li class="itenary-list-child"><small>Reach Shillong and Check-In & freshen up.
</small></li>
    <li class="itenary-list-child"><small>Gather for our BMTIEN style, welcome shots to start the night right.
</small></li>
     <li class="itenary-list-child"><small>Some amazing group bonding activities over music & dinner at the property.
</small></li>
     
 
</ul>
       </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <div className='itenary-btn'>
      <div><img src={require('../images/goal.png')}/></div>
            <small className='m-0 fw-semibold'>Day 2</small>
          
        </div>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <ul class="itenary-list p-3 pt-1 pb-0 mx-2">
  <li class="itenary-list-child"><small>Airport pick up by 12 noon.
</small></li>
  <li class="itenary-list-child"><small>Road trip to Shillong (approx 4 hours).
</small></li>
  <li class="itenary-list-child"><small>Visit Purva Tirupati Sri Balaji Temple & Barapani Lake (Umiam) on the way to Shillong.
</small></li>
   <li class="itenary-list-child"><small>Reach Shillong and Check-In & freshen up.
</small></li>
    <li class="itenary-list-child"><small>Gather for our BMTIEN style, welcome shots to start the night right.
</small></li>
     <li class="itenary-list-child"><small>Some amazing group bonding activities over music & dinner at the property.
</small></li>
     
 
</ul>
         </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <div className='itenary-btn'>
      <div><img src={require('../images/goal.png')}/></div>
        <small className='m-0 fw-semibold'>Day 3</small>
          
        </div>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <ul class="itenary-list p-3 pt-1 pb-0 mx-2">
  <li class="itenary-list-child"><small>Airport pick up by 12 noon.
</small></li>
  <li class="itenary-list-child"><small>Road trip to Shillong (approx 4 hours).
</small></li>
  <li class="itenary-list-child"><small>Visit Purva Tirupati Sri Balaji Temple & Barapani Lake (Umiam) on the way to Shillong.
</small></li>
   <li class="itenary-list-child"><small>Reach Shillong and Check-In & freshen up.
</small></li>
    <li class="itenary-list-child"><small>Gather for our BMTIEN style, welcome shots to start the night right.
</small></li>
     <li class="itenary-list-child"><small>Some amazing group bonding activities over music & dinner at the property.
</small></li>
     
 
</ul>
        </div>
    </div>
  </div>
</div>
    </div>
    <div
      className="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
      tabIndex={0}
    >
       <ul class="itenary-list p-4 mx-4">
  <li class="itenary-list-child"><small>Airport pick up by 12 noon.
</small></li>
  <li class="itenary-list-child"><small>Road trip to Shillong (approx 4 hours).
</small></li>
  <li class="itenary-list-child"><small>Visit Purva Tirupati Sri Balaji Temple & Barapani Lake (Umiam) on the way to Shillong.
</small></li>
   <li class="itenary-list-child"><small>Reach Shillong and Check-In & freshen up.
</small></li>
    <li class="itenary-list-child"><small>Gather for our BMTIEN style, welcome shots to start the night right.
</small></li>
     <li class="itenary-list-child"><small>Some amazing group bonding activities over music & dinner at the property.
</small></li>
     
 
</ul>
    </div>
    <div
      className="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
      tabIndex={0}
    >
     <ul class="itenary-list p-4 mx-4">
  <li class="itenary-list-child"><small>Airport pick up by 12 noon.
</small></li>
  <li class="itenary-list-child"><small>Road trip to Shillong (approx 4 hours).
</small></li>
  <li class="itenary-list-child"><small>Visit Purva Tirupati Sri Balaji Temple & Barapani Lake (Umiam) on the way to Shillong.
</small></li>
   <li class="itenary-list-child"><small>Reach Shillong and Check-In & freshen up.
</small></li>
    <li class="itenary-list-child"><small>Gather for our BMTIEN style, welcome shots to start the night right.
</small></li>
     <li class="itenary-list-child"><small>Some amazing group bonding activities over music & dinner at the property.
</small></li>
     
 
</ul>
    </div>
    
  </div>
</>

        </div>

                        </div>

                        <div className="col-md-4 itenary-card
itenary-card">
                            <div className=' p-3 bg-white'>
                                {/* ------------- */}


                                <>
                               <div className='mb-4'>
                               <h6>BATCH DATE</h6>
                               </div>
  <nav>
    <div className="nav nav-tabs" id="nav-tab2" role="tablist">
      <button
        className="nav-link active fs-7"
        id="nav-home-tab2"
        data-bs-toggle="tab"
        data-bs-target="#nav-home2"
        type="button"
        role="tab"
        aria-controls="nav-home2"
        aria-selected="true"
      >
        SEP
      </button>
      <button
        className="nav-link fs-7"
        id="nav-profile-tab2"
        data-bs-toggle="tab"
        data-bs-target="#nav-profile2"
        type="button"
        role="tab"
        aria-controls="nav-profile2"
        aria-selected="false"
      >
        OCT
      </button>
      <button
        className="nav-link fs-7"
        id="nav-contact-tab2"
        data-bs-toggle="tab"
        data-bs-target="#nav-contact2"
        type="button"
        role="tab"
        aria-controls="nav-contact2"
        aria-selected="false"
      >
        NOV
      </button>
      <button
        className="nav-link fs-7"
        id="nav-disabled-tab2"
        data-bs-toggle="tab"
        data-bs-target="#nav-disabled2"
        type="button"
        role="tab"
        aria-controls="nav-disabled2"
        aria-selected="false"
        disabled=""
      >
        DEC
      </button>
    </div>
  </nav>
  <div className="tab-content c-tab" id="nav-tabContent2">
    <div
      className="tab-pane fade show active"
      id="nav-home2"
      role="tabpanel"
      aria-labelledby="nav-home-tab2"
      tabIndex={0}
    >
     <small className='fs-7 fw-semibold'>21-07-2023 – 25-08-2023 (open)</small>
    </div>
    <div
      className="tab-pane fade"
      id="nav-profile2"
      role="tabpanel"
      aria-labelledby="nav-profile-tab2"
      tabIndex={0}
    >
     <small className='fs-7 fw-semibold'>21-07-2023 – 25-08-2023 (open)</small>
    </div>
    <div
      className="tab-pane fade"
      id="nav-contact2"
      role="tabpanel"
      aria-labelledby="nav-contact-tab2"
      tabIndex={0}
    >
     <small className='fs-7 fw-semibold'>21-07-2023 – 25-08-2023 (open)</small>
    </div>
    <div
      className="tab-pane fade"
      id="nav-disabled2"
      role="tabpanel"
      aria-labelledby="nav-disabled-tab2"
      tabIndex={0}
    >
     <small className='fs-7 fw-semibold'>21-07-2023 – 25-08-2023 (open)</small>
    </div>
  </div>
  
</>


                                {/* ------------------ */}

                            </div>



                            <div className=' p-3 bg-white'>
                                {/* ------------- */}


                                <>
                               <div className='mb-4 px-1'>
                               <h6>COSTING</h6>
                               </div>
  <nav>
    <div className="nav nav-tabs" id="nav-tab3" role="tablist">
      <button
        className="nav-link active fs-7"
        id="nav-home-tab3"
        data-bs-toggle="tab"
        data-bs-target="#nav-home3"
        type="button"
        role="tab"
        aria-controls="nav-home3"
        aria-selected="true"
      >
        Room Sharing
      </button>
      <button
        className="nav-link fs-7"
        id="nav-profile-tab3"
        data-bs-toggle="tab"
        data-bs-target="#nav-profile3"
        type="button"
        role="tab"
        aria-controls="nav-profile3"
        aria-selected="false"
      >
       Selling Cost (Per Person)
      </button>
     
    </div>
  </nav>
  <div className="tab-content c-tab" id="nav-tabContent3">
    <div
      className="tab-pane fade show active"
      id="nav-home3"
      role="tabpanel"
      aria-labelledby="nav-home-tab3"
      tabIndex={0}
    >
     <div className='d-flex gap-1 align-items-center'>
      <small className='fs-7 fw-semibold primary-color'>
      Double Sharing : 
      </small>
      <small className='fs-7 fw-semibold m-0 text-dark'>
       ₹ 29,999/-
      </small>
      
     </div>
    </div>
    <div
      className="tab-pane fade"
      id="nav-profile3"
      role="tabpanel"
      aria-labelledby="nav-profile-tab3"
      tabIndex={0}
    >
     <div className='d-flex gap-1 align-items-center'>
      <small className='fs-7 fw-semibold primary-color'>
      Triple Sharing : 
      </small>
      <small className='fs-7 fw-semibold m-0 text-dark'>
       ₹ 29,999/-
      </small>
      
     </div>
    </div>
   
    
  </div>
</>


                                {/* ------------------ */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------details-end-------------- */}




        </div>
    );
}

export default Itenary;