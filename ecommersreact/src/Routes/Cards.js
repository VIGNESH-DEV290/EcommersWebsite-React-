import React from 'react'
import './Cards.css'
function Carts(props) {
  return (
    <div className='background-image'>
    <div className='row' style={{ margin: '2%' }}>
      {props.data.map((product) => {

        return (
          
          <div className='col-sm-3' >
         
            <div className="card" style={{ width: "18rem", margin: "2%" }}>
              <div className='block'>
                <img src={product.pic} className="card-img-top" alt="..." />
              </div>
              <div className="card-body" >
                <h2 className="card-title" style={{ display: 'flex', justifyContent: "center" }}>{product.name}</h2>
                <h4 style={{ display: 'flex', justifyContent: "center" }}>{product.para}</h4>
                <h4 className="card-text" style={{ display: 'flex', justifyContent: "center" }}>
                  {product.cost}
                </h4>
         
                <div style={{ display: 'flex', justifyContent: "center",marginBottom:'1rem',marginTop:"1rem" }}>
                <button className="btn btn-primary" >BUY</button>
                </div>
                <div style={{ display: 'flex', justifyContent: "center" }}>
                  <button className="btn btn-primary" onClick={() => props.handleCartData(product)} style={{ border: "none" }} >
                    ADD TO CART
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          
        )
      })}

    </div>
    </div>
  )
}

export default Carts