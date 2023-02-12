import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import { styleButton } from '../../routes/authentication/authentication.component';


import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, isCartOpen } = useContext(CartContext);
  const naviagte = useNavigate()

  const goToCheckout = () => naviagte('/checkout')

  return (
    <div className='cart-dropdown-container' style={isCartOpen ?{ display: 'none'}: null}>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <button onClick={goToCheckout} style={{...styleButton, border: 'none', padding: '1rem', borderRadius: '8px', cursor: 'pointer'}}>GO TO CHECKOUT</button>
    </div>
  );
};

export default CartDropdown;