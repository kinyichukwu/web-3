import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { productImage, productPrice, productName, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <img src={productImage} alt={`${productName}`} />
      <div className='item-details'>
        <span className='name'>{productName}</span>
        <span className='price'>
          {quantity} x ₦{productPrice}
        </span>
      </div>
    </div>
  );
};

export default CartItem;