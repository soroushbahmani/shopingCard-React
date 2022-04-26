import React from 'react'
//route
import { Route, Link } from 'react-router-dom'
//helpers
import { Shorten } from '../../helpers/function'

function Product({ ProductData }) {
    return (
        <div style={{ margin: ' 0 20px' }}>
            <img src={ProductData.image} alt='img' style={{ "width": '200px' }} />
            <h3>{Shorten(ProductData.title)}</h3>
            <p>
                {ProductData.price}
            </p>
            <div>
                <Link to={`/product/${ProductData.id}`}>detaled</Link>
            </div>
            <div>
                <button>add to card</button>
            </div>
        </div>
    )
}

export default Product