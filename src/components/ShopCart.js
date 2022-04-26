import React,{ useContext } from 'react'
// routes
import { Link } from 'react-router-dom';
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
            {
                state.checkout && <div>
                    <h3>checked out successFully</h3>
                    <Link to='/products'>buy more</Link>
                </div>
            }    
                  {
                state.itemCounter === 0 && !state.checkout  && <div>
                    <h3>want to buy?</h3>
                    <Link to='/products'>go back to shop</Link>
                </div>
            }
        </div>
    )
}

export default ShopCart