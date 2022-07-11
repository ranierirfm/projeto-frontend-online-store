import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartItem from '../../Components/CartItem/CartItem';

class Cart extends React.Component {
  render() {
    const { cartItem, message, addToCart, removeToCart } = this.props;
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
              addToCart={ addToCart }
              productObj={ produto }
              removeToCart={ removeToCart }
            />
          ))
        }

        {/* req 12 */}
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
  addToCart: propTypes.func.isRequired,
  removeToCart: propTypes.func.isRequired,
};

export default Cart;
