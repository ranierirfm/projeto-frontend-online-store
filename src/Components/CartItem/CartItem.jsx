import React from 'react';
import propTypes from 'prop-types';

class CartItem extends React.Component {
  render() {
    const { title, price, quantity } = this.props;
    return (
      <div>
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <h3>{ price }</h3>
        <h6>Quantidade</h6>
        <span
          data-testid="shopping-cart-product-quantity"
        >
          { quantity }
        </span>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  quantity: propTypes.number.isRequired,
};

export default CartItem;
