import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LinkCart from './Components/LinkCart/LinkCart';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import { getProductDetails } from './services/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItem: [],
    };
  }

  addToCart = async (idOfProduct) => {
    const product = await getProductDetails(idOfProduct);
    if (this.itemExist(product)) return this.plusItemQuantity(product);
    this.createNewItem(product);
  }

  itemExist = (product) => {
    const { cartItem } = this.state;
    return cartItem.some((item) => item.id === product.id);
  }

  plusItemQuantity = (product) => {
    const { cartItem } = this.state;
    const indexOfItem = this.fetchItemIndex(product);
    const itemQuantity = cartItem[indexOfItem].quantity;
    const cloneOfCartItem = cartItem;
    cloneOfCartItem[indexOfItem] = this.plusQuantity(indexOfItem, itemQuantity);
    this.setState({ cartItem: cloneOfCartItem });
  }

  createNewItem = (product) => {
    const addQuantityKey = { ...product, quantity: 1 };
    this.setState((prevState) => ({ cartItem: [...prevState.cartItem, addQuantityKey] }));
  }

  fetchItemIndex = (product) => {
    const { cartItem } = this.state;
    return cartItem.findIndex((item) => item.id === product.id);
  }

  plusQuantity = (indexOfItem) => {
    const { cartItem } = this.state;
    const itemQuantity = cartItem[indexOfItem].quantity;
    return { ...cartItem[indexOfItem], quantity: itemQuantity + 1 };
  }

  render() {
    const { cartItem } = this.state;
    return (
      <BrowserRouter>
        <LinkCart />
        <Switch>
          <Route exact path="/" render={ () => <Home addToCart={ this.addToCart } /> } />
          <Route
            exact
            path="/carrinho"
            render={ () => <Cart cartItem={ cartItem } /> }
          />
          <Route
            exact
            path="/productDetails/:id"
            render={
              (props) => <ProductDetails { ...props } addToCart={ this.addToCart } />
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
