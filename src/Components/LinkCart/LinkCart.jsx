import React from 'react';
import { Link } from 'react-router-dom';

class LinkCart extends React.Component {
  render() {
    const { allQuantityOfItems } = this.props;

    return (
      <section>
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <span
          data-testid="shopping-cart-size"
        >
          { allQuantityOfItems }
        </span>
      </section>
    );
  }
}

export default LinkCart;
