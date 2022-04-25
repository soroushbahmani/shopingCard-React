import React from 'react'

function Product({ProductData}) {
    return (
        <div>
            <img src={ProductData.image} alt='img' />
            <h3>{ProductData.title}</h3>
            <p>
                {ProductData.price}
            </p>
            <div>

                <a href=''>detaled</a>
            </div>
            <div>
                <button>add to card</button>
            </div>
        </div>
    )
}

export default Product