import React, { useContext } from 'react'
// context
import { ProductContext } from '../context/ProductContextProvider'
// route
import { useParams, Link } from 'react-router-dom'
//css
import style from './ProductDetailes.module.css'

const ProductDetailes = () => {
    const props = useParams()
    const data = useContext(ProductContext);
    const product = data[props.id - 1]
    const { image, description, title, price, category } = product

    return (
        <div className={style.container}>
            <img className={style.image} src={image} alt='img' />
            <div className={style.textContainer}>
                <h3>{title}</h3>
                <p className={style.description}>{description}</p>
                <p className={style.category}><span>Category:</span> {category} </p>
                <div className={style.buttonContainer}>
                    <span className={style.price}>{price}$</span>
                    <Link to='/product'>back to shop</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailes