import React, { useContext } from 'react'
//context
import { CardContext } from '../../context/CartContextProvider'
//function
import { Shorten } from '../../helpers/function';
//css
import style from './Cart.modul.css'
const Cart = (props) => {
  const { dispatch } = useContext(CardContext);
  const { image, title, price, quantity } = props.data;
  return (
    <div className={style.container}>
      <img className={style.productImage} src={image} alt='img' />
      <div className={style.data}>
        <h3>{Shorten(title)}</h3>
        <p>{price}$</p>
      </div>
      <div>
        <span className={style.quantity}>{quantity}</span>
      </div>
      <div className={style.buttonContainer}>
        {
          quantity > 1 ?
            <button onClick={() => dispatch({ type: "DICREASE", payload: props.data })}>-</button>
            :
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}>remove</button>
        }
        <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>add card</button>

      </div>
    </div>
  )
}

export default Cart