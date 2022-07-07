import React from 'react';
import { Link } from 'react-router-dom';

class LinkCart extends React.Component {
  render() {
    return (
      <Link
        to="/carrinho"
        data-testid="shopping-cart-button"
      >
        Carrinho
      </Link>
    );
  }
}

export default LinkCart;
