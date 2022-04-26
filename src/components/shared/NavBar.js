import React, { useContext } from 'react'
// context
import { CardContext } from '../../context/CartContextProvider'
// routes
import { Link } from 'react-router-dom'
//css
import style from 'NavBar.module.css'

const NavBar = () => {
  const { state } = useContext(CardContext);

  return (
    <div>
      &nbsp;
      &nbsp;
      &nbsp;
      <Link to='/shopcart'>shop</Link> : {state.itemCounter}
      &nbsp;
      &nbsp;
      &nbsp;
      <Link to='/products'>product</Link>
      <hr />
    </div>
  )
}

export default NavBar