import React, { useState, useEffect, createContext } from 'react'
// API
import { getProducts } from '../services/api'

export const ProductContext = createContext()
const ProductContext = ({ children }) => {
    const [products, setProducts] = useState([])
    children
    useEffect(() => {

        const fetchApi = async () => {
            setProducts(await getProducts());
        }

        fetchApi();
    }, [])

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext