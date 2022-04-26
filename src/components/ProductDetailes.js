import React, { useContext } from 'react'
// context
import { ProductContext } from '../context/ProductContextProvider'
// route
import { useParams } from 'react-router-dom'

const ProductDetailes = () => {
    const props = useParams()
    const data = useContext(ProductContext);
    const product = data[props.id - 1]
    const { image, description, title, price, category } = data

    return (
        <div>ProductDetailes</div>
    )
}

export default ProductDetailes