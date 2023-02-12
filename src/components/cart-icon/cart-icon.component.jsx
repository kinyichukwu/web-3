import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { changeSize, setChangeSize, isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  setTimeout(() =>{ if(changeSize === true){ setChangeSize(false)}}, 300)
  
  return (
    <div className='cart-icon-container cart' onClick={toggleIsCartOpen}>
      <ShoppingIcon style={changeSize ? {transform: 'scale(1.5)', transition: '.3s'}:{}}  className='shopping-icon' />
      <span className='item-count' style={{color:'black'}}>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
