import React, { useContext } from 'react'
// routes
import { Link } from 'react-router-dom';
//context
import { CardContext } from '../context/CartContextProvider'
//components
import Cart from './shared/Cart'
//css
import style from './ShopCart.module.css'
const ShopCart = () => {
    const { state, dispatch } = useContext(CardContext);

    return (
        <div className={style.container}>
            <div className={style.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemCounter > 0 && <div className={style.payment}>
                    <p>
                        <span>total items : </span >{state.itemCounter}
                    </p>
                    <p>
                        <span>total payments : </span >{state.total}
                    </p>
                    <div className={style.buttonContainer}>
                        <button className={style.clear} onClick={() => dispatch({ type: "CLEAR" })}>clear</button>
                        <button className={style.checkout} onClick={() => dispatch({ type: "CHECKOUT" })}>check out</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={style.complete}>
                    <h3>checked out successFully</h3>
                    <Link to='/products'>buy more</Link>
                </div>
            }
            {
                state.itemCounter === 0 && !state.checkout && <div className={style.complete}>
                    <h3>want to buy?</h3>
                    <Link to='/products'>go back to shop</Link>
                </div>
            }
        </div>
    )
}

export default ShopCart