import React from 'react'
import ecom1 from './Routes/images/react1.jpg'
import ecom2 from './Routes/images/react2.png'
import ecom3 from './Routes/images/react3.png'



function Slides() {
  return (
    <div >
        <div
  id="carouselExampleControls"
  className="carousel slide"
  data-ride="carousel"
 >
<div >
  <div className="carousel-inner" >
    <div className="carousel-item active ">
      <div className='slides'>
      <img src={ecom1} className="d-block w-100" alt="..." />
      </div>
    </div>
    <div className="carousel-item">
      <div  className='slides'>
      <img src={ecom2} className="d-block w-100" alt="..." />
      </div>
    </div>
    <div className="carousel-item">
      <div   className='slides'>
      <img src={ecom3} className="d-block w-100" alt="..." />
      </div>
    </div>
  </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleControls"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleControls"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

    </div>
  )
}

export default Slides