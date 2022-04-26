import React, { useContext } from 'react'
// context
import { ProductContext } from '../context/ProductContextProvider'
// route
import { useParams , Link } from 'react-router-dom'
//css
import style from './ProductDetailes.module.css'

const ProductDetailes = () => {
    const props = useParams()
    const data = useContext(ProductContext);
    const product = data[props.id - 1]
    const { image, description, title, price, category } = product

    return (
        <div>
            <img src={image} alt='img'/>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><span>category : </span> {category}</p>
            <div>
                <span>{price}</span>
                <Link to='/product'>back to shop</Link>
            </div>
        </div>
    )
}

export default ProductDetailes