import React from 'react';
import propTypes from 'prop-types';
import CartItem from '../../Components/CartItem/CartItem';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      cartList: [],
    };
  }

  componentDidMount() {
    this.setCartList();
  }

  setCartList = () => {
    const { cartItem } = this.props;
    this.setState({ cartList: cartItem });
  }

  render() {
    const { cartList } = this.state;
    if (cartList.lenght === 0) {
      return (
        <h1
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </h1>
      );
    }
    return (
      <section>
        {
          cartList.map((produto) => (
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
};

export default Cart;
