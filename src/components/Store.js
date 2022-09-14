import React, { useContext } from 'react'
// context
import {ProductContext} from '../context/ProductContextProvider'
//components
import Product from './shared/product'
//css
import style from './Store.module.css'

const Store = ()=> {

    const products = useContext(ProductContext)
    return (
        <div className={style.container}>
       
           {products.map(item => <Product key={item.id} ProductData={item} />)}
        </div>
    )
}

export default Store
