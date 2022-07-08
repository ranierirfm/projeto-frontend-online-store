import React from 'react';
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
          :
            cartItem.map((produto) => (
              <CartItem 
              title={ produto.title }
              price={ produto.price } 
              />
            ))
          }
    </div>
    );
  }
}

export default Cart;
