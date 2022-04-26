import React, { useContext } from 'react'
//route
import { Route, Link } from 'react-router-dom'
//helpers
import { Shorten, isInCard, quantity } from '../../helpers/function'
//context
import { CardContext } from '../../context/CartContextProvider'

function Product({ ProductData }) {

    const { state, dispatch } = useContext(CardContext);

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
                {
                    isInCard(state, ProductData.id) ?
                        <button onClick={() => dispatch({ type: "INCREASE", payload: ProductData })}>+</button>
                        :
                        <button onClick={() => dispatch({ type: "ADD_ITEM", payload: ProductData })}>add card</button>

                }
                {quantity(state, ProductData.id) > 1 && <button onClick={() => dispatch({ type: "DICREASE", payload: ProductData })}>-</button>}
                {quantity(state, ProductData.id) === 1 && <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: ProductData })}>remove</button>}
            </div>
        </div>
    )
}

export default Product