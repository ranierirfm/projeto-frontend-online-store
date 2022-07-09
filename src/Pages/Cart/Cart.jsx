import React from 'react';
import propTypes from 'prop-types';
import CartItem from '../../Components/CartItem/CartItem';

class Cart extends React.Component {
  render() {
    const { cartItem, message } = this.props;
    return (
      <section>
        <h1
          data-testid="shopping-cart-empty-message"
        >
          { message() }
        </h1>
        {
          cartItem.map((produto) => (
            <CartItem
              quantity={ produto.quantity }
              key={ produto.id }
              title={ produto.title }
              price={ produto.price }
            />
          ))
        }
      </section>
    );
  }
}

Cart.propTypes = {
  cartItem: propTypes.arrayOf(propTypes.shape({})).isRequired,
  message: propTypes.func.isRequired,
};

export default Cart;
