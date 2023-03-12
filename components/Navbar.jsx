import React, { useState }  from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import { Cart } from './';
import { BurgerMenu } from './';
import { useStateContext} from '../context/StateContext';


import style from './Navbar.module.css';




const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.box}>
          <div className={style.logo_image}>
            <p className="logo">
			<Link href="/">HANDSTITCHES</Link>
			</p>
          </div>
          <ul
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu]
            }
          >
            <li>
              <a href='./'>Home</a>
            </li>
            <li>
              <a href='./about'>About Us</a>
            </li>
            <li>
              <a href='./payment'>Payments</a>
            </li>
            <li>
              <a href='./delivery'>Delivery</a>
            </li>
            <li>
              <a href='./PrivacyPolicy'>Terms</a>
            </li>
          </ul>
		   <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar