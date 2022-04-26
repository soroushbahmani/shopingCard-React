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
        </div>
    )
}

export default ShopCart