import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
        <Link
          data-testid="checkout-products"
          to="/checkout"
        >
          <h2>
            Finalizar compra!
          </h2>
        </Link>
      </section>
    );
  }
}

Cart.propTypes = {
  cartItem: propTypes.arrayOf(propTypes.shape({})).isRequired,
  message: propTypes.func.isRequired,
};

export default Cart;
