import React from 'react';
import propTypes from 'prop-types';
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

LinkCart.propTypes = {
  allQuantityOfItems: propTypes.func.isRequired,
};

export default LinkCart;
