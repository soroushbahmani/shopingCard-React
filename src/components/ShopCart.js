import React,{ useContext } from 'react'
//context
import { CardContext } from '../context/CartContextProvider'
//components
import Cart from './shared/Cart'
const ShopCart = () => {
    const {state , dispatch} = useContext(CardContext);

    return (
        <div>
            <div>
                {state.selectedItems.map(item=> <Cart key={item.id} data={item}/>)}
            </div>
            {
                state.itemCounter > 0 && <div>
                    <p>
                        <span>total items : </span >{state.itemCounter}
                    </p>
                    <p>
                        <span>total payments : </span >{state.total}
                    </p>
                    <div>
                        <button onClick={()=> dispatch({type:"CHECKOUT"})}>check out</button>
                        <button onClick={()=> dispatch({type:"CLEAR"})}>clear</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ShopCart