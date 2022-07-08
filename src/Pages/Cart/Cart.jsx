import React from 'react';
import propTypes from 'prop-types';
import CartItem from '../../Components/CartItem/CartItem';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      productsInCart: [],
    };
  }

  render() {
    const { productsInCart } = this.state;
    const { cartItem } = this.props;
    return (
      <div>
        {
          productsInCart.lenght === 0 ? (
            <h1
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </h1>
          )
            : cartItem.map((produto) => (
              <CartItem
                quantity={ produto.quantity }
                key={ produto.id }
                title={ produto.title }
                price={ produto.price }
              />
            ))
        }
      </div>
    );
  }
}

Cart.propTypes = {
  cartItem: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default Cart;
