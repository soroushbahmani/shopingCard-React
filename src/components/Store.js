import React, { useContext } from 'react'
// context
import {ProductContext} from '../context/ProductContextProvider'
//components
import Product from './shared/Product'

const Store = ()=> {

    const products = useContext(ProductContext)
    return (
        <div>
            {console.log(products)}
           {products.map(item => <Product key={item.id} ProductData={item} />)}
        </div>
    )
}

export default Store