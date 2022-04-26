import React, { useContext } from 'react'
// context
import { CardContext } from '../../context/CartContextProvider'
// routes
import {Link} from 'react-router-dom'

const NavBar = () => {
  const { state } = useContext(CardContext);

  return (
    <div>
      <Link to='/cart'>shop</Link> : {state.itemCounter}
      <hr/>
      <Link to='/products'>product</Link>
    </div>
  )
}

export default NavBar