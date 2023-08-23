import { useEffect } from 'react';
import './Itenary.css'

import { useLocation } from 'react-router-dom';

function Itenary() {
  useEffect(()=>{
    window.scrollTo(0,0);

  },[])


  const location=useLocation()
  // console.log( JSON.parse(location.state))
  const fetcData= JSON.parse(location.state)
  console.log(fetcData.itenaryday1)
  fetcData.itenaryday1.map((c)=>{
    console.log(c)
  })
  
 
  
    return (
        <div>
             <div
        className="container-fluid home-bg position-relative"
        style={{ background: `url("${fetcData.bannerimg}")`, height: "50vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
      >
        <div className="home-title blob pt-5">
          <h1 className=" mb-3">{fetcData.maintitle}</h1>
          <p>{fetcData.maindes}</p>
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
                   <h1 className='fs-4'>{fetcData.title}</h1>
                   <small className=''>{fetcData.des}</small>
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
                    <small className='m-0 text-dark '>{fetcData.days}</small>
                </div>
            </div>

            <div className='col-md-4 mb-3 mt-3'>
                <div className='task-card'>
                    <img src={require('../images/people.png')}/>
                    <small className='m-0 text-dark '>{fetcData.people}</small>
                </div>
            </div>
            <div className='col-md-4 mb-3 mt-3'>
                <div className='task-card'>
                    <img src={require('../images/tag.png')}/>
                    <small className='m-0 text-dark '>{fetcData.price}</small>
                </div>
            </div>
            <div className='col-md-4 mb-3 mt-3'>
                <div className='task-card'>
                    <img src={require('../images/date.png')}/>
                    <small className='m-0 text-dark '>{fetcData.date}</small>
                </div>
            </div>
            <div className='col-md-4 mb-3 mt-3'>
                <div className='task-card'>
                    <img src={require('../images/age.png')}/>
                    <small className='m-0 text-dark '>{fetcData.age}</small>
                </div>
            </div>
            <div className='col-md-4 mb-3 mt-3'>
                <div className='task-card'>
                    <img src={require('../images/pickup.png')}/>
                    <small className='m-0 text-dark '>{fetcData.pickup}</small>
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
<div className="accordion" id="accordionExample">
  {fetcData.itenaryday1.map((b)=>{
    return(
      <>
      <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button ${b.col}`}type="button" data-bs-toggle="collapse" data-bs-target={`#${b.cid}`} aria-expanded={b.panel} aria-controls={b.cid}>
        <div className='itenary-btn'>
        <div><img src={require('../images/goal.png')}/></div>
        <small className='m-0 fw-semibold text-capitalize'>{b.day}</small>
          
        </div>
      </button>
    </h2>
    <div id={b.cid} className={`accordion-collapse collapse  ${b.show}`} data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul className="itenary-list p-3 pt-1 pb-0 mx-2">
     
{b.daydata.map((a)=>{
  return(
    <>
    <li className="itenary-list-child"><small>{a}
</small></li>
    </>
  )
})}


 
</ul>
       </div>
    </div>
  </div>
      </>
    )
  })}

</div>
    </div>
    <div
      className="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
      tabIndex={0}
    >
       <ul className="itenary-list p-4 mx-4">
       {fetcData.inclusion.map((e)=>{
        
        return(
          <>
            <li className="itenary-list-child"><small>{e}
</small></li>
 
     
          </>
        )
      })}
 
</ul>
    </div>
    <div
      className="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
      tabIndex={0}
    >
     <ul className="itenary-list p-4 mx-4">
     {fetcData.exclusion.map((e)=>{
       
       return(
         <>
           <li className="itenary-list-child"><small>{e}
</small></li>

    
         </>
       )
     })}
     
 
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
     <small className='fs-7 fw-semibold'>{fetcData.sep}</small>
    </div>
    <div
      className="tab-pane fade"
      id="nav-profile2"
      role="tabpanel"
      aria-labelledby="nav-profile-tab2"
      tabIndex={0}
    >
     <small className='fs-7 fw-semibold'>{fetcData.oct}</small>
    </div>
    <div
      className="tab-pane fade"
      id="nav-contact2"
      role="tabpanel"
      aria-labelledby="nav-contact-tab2"
      tabIndex={0}
    >
     <small className='fs-7 fw-semibold'>{fetcData.nov}</small>
    </div>
    <div
      className="tab-pane fade"
      id="nav-disabled2"
      role="tabpanel"
      aria-labelledby="nav-disabled-tab2"
      tabIndex={0}
    >
     <small className='fs-7 fw-semibold'>{fetcData.dec}</small>
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
      {fetcData.sharing}
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
      {fetcData.selling}
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