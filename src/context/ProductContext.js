import React, { useState, useEffect, createContext } from 'react'
// API
import { getProducts } from '../services/api'

const ProductContext = (props) => {
    const ProductContext = createContext()
    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchApi = async () => {
            setProducts(await getProducts());
        }

        fetchApi();
    }, [])

    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContext