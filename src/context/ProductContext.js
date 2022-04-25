import React, { useState, useEffect } from 'react'
// API
import { getProducts } from '../services/api'

const ProductContext = () => {

    const [product, setProducts] = useState([])

    useEffect(() => {

        const fetchApi = async () => {
            setProducts(await getProducts());
        }

        fetchApi();
    }, [])

    console.log(product);


    return (
        <div>ProductContext</div>
    )
}

export default ProductContext