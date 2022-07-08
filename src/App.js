import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LinkCart from './Components/LinkCart/LinkCart';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItem: [],
    };
  }

  verifyItemQuantity = (product) => {
 const { cartItem } = this.state;
 return cartItem.some((item) => item.id === product.id );
  }

  addToCart = async (id) => {
    const fetchProduct = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const product = await fetchProduct.json();
    if (this.verifyItemQuantity(product)) {
      return 
    }
    const productQuantity = { ...product, quantity: 1 }
    this.setState((prevState) => ({
      cartItem: [product, ...prevState.cartItem],
    }))
    }

  render() {
    const { cartItem } = this.state;
    return (
      <BrowserRouter>
        <LinkCart />
        <Switch>
          <Route exact path="/" render={ ()  => <Home addToCart={ this.addToCart } />} />
          <Route exact path="/carrinho" render={ () => <Cart cartItem={ cartItem } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
