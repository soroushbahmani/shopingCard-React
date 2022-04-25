import React, { useContext } from 'react'
// context
import ProductContext from '../context/ProductContext'
//components
import Product from './shared/product'

function Store() {

    const products = useContext(ProductContext)
    return (
        <div>
           {products.map(Product => <Product key={Product.id} ProductData={Product} />)}
        </div>
    )
}

export default Store