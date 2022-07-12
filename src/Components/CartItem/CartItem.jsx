import React from 'react';
import propTypes from 'prop-types';

class CartItem extends React.Component {
  checkQuantity = (productObj) => {
    const { addToCart, quantity } = this.props;
    if (quantity >= productObj.available_quantity) return;
    addToCart(productObj);
  }

  render() {
    const { title, price, quantity, productObj, removeToCart } = this.props;
    return (
      <div>
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <h3>{ price }</h3>
        <h6>Quantidade</h6>
        <button
          data-testid="product-decrease-quantity"
          onClick={ () => removeToCart(productObj) }
          type="button"
        >
          -
        </button>
        <span
          data-testid="shopping-cart-product-quantity"
        >
          { quantity }
        </span>
        <button
          data-testid="product-increase-quantity"
          onClick={ () => this.checkQuantity(productObj) }
          type="button"
        >
          +
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  quantity: propTypes.number.isRequired,
  addToCart: propTypes.func.isRequired,
  productObj: propTypes.arrayOf(propTypes.shape({})).isRequired,
  removeToCart: propTypes.func.isRequired,
};

export default CartItem;
