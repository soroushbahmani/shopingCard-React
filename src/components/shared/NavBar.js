import React, { useContext } from 'react'
// context
import { CardContext } from '../../context/CartContextProvider'
// routes
import { Link } from 'react-router-dom'
//css
import style from './NavBar.module.css'






const NavBar = () => {
  const { state } = useContext(CardContext);

  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <Link to='/products' className={style.productLink}>Product</Link>
        <div className={style.p_counter}>
          <Link to='/shopcart'><i className='fa fa-shopping-cart '></i></Link>
          <span className={style.counetr}>{state.itemCounter}</span>
        </div>
      </div>


    </div>
  )
}

export default NavBar