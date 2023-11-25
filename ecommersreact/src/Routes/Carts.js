import React from 'react'

function Carts(props) {
    var total = 0;

    props.data.map((product) => {
        return (
            total = total + product.data.cost
        )
    })
    return (
        <div className='row'>
            {props.data.map((cartItem) => (
                <div className='col-sm-3'  key={cartItem.data.id}>

                    <div className="card" style={{ width: "18rem", margin: "2%" }}>
                        <div className='block'>
                            <img src={cartItem.data.pic} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body" >
                            <h2 className="card-title" style={{ display: 'flex', justifyContent: "center" }}>{cartItem.data.name}</h2>
                            <h4 style={{ display: 'flex', justifyContent: "center" }}>{cartItem.data.para}</h4>
                            <h4 className="card-text" style={{ display: 'flex', justifyContent: "center" }}>
                                {cartItem.data.cost}
                            </h4>


                        </div>
                    </div>
                </div>

            ))}

            <h2 style={{ display: 'flex', justifyContent: "center" }}>Total cost is:{total}</h2>

        </div>
    )
}

export default Carts