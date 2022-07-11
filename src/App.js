import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LinkCart from './Components/LinkCart/LinkCart';
import Cart from './Pages/Cart/Cart';
import FinishPayMount from './Pages/FinishPayMount/FinishPayMount';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import { getItemQuantity, plussItemCartQuantity } from './services/cartStorage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItem: [],
      allQuantityOfItems: 1,
    };
  }

  // requisito 13
  componentDidMount() {
    this.setState({ allQuantityOfItems: !getItemQuantity() ? 0 : getItemQuantity() });
  }

  // requisito 13
  midlewareOfAddToCart = (product) => {
    this.setState(({
      allQuantityOfItems: getItemQuantity() + 1,
    }), () => {
      const { allQuantityOfItems } = this.state;
      plussItemCartQuantity(allQuantityOfItems);
    });
    this.addToCart(product);
  }

  addToCart = async (product) => {
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
    cloneOfCartItem[indexOfItem] = this.fotmatAndPlusQuantity(indexOfItem, itemQuantity);
    this.setState({ cartItem: cloneOfCartItem });
  }

  fotmatAndPlusQuantity = (indexOfItem) => {
    const { cartItem } = this.state;
    const itemQuantity = cartItem[indexOfItem].quantity;
    return { ...cartItem[indexOfItem], quantity: itemQuantity + 1 };
  }

  createNewItem = (product) => {
    const addQuantityKey = { ...product, quantity: 1 };
    this.setState((prevState) => ({
      cartItem: [...prevState.cartItem, addQuantityKey],
    }));
  }

  itemQuantity = (product) => {
    console.log(product);
    const { cartItem } = this.state;
    return cartItem[this.fetchItemIndex(product)].quantity;
  }

  removeToCart = (product) => {
    if (this.quantityIsZero(product) === 1) return;
    this.decreaseQuantity(product);
  }

  quantityIsZero = (product) => this.itemQuantity(product);

  removeItem = (product) => {
    const { cartItem } = this.state;
    const filtedCartItem = cartItem.filter((produto) => produto.id !== product.id);
    this.setState({ cartItem: filtedCartItem });
  }

  decreaseQuantity = (product) => {
    const { cartItem } = this.state;
    const indexOfItem = this.fetchItemIndex(product);
    const cloneOfCartItem = cartItem;
    cloneOfCartItem[indexOfItem].quantity = this.itemQuantity(product) - 1;
    this.setState({ cartItem: cloneOfCartItem }, () => {
      if (!this.quantityIsZero(product)) return this.removeItem(product);
    });
  }

  fetchItemIndex = (product) => {
    const { cartItem } = this.state;
    return cartItem.findIndex((item) => item.id === product.id);
  }

  message = () => {
    const { cartItem } = this.state;
    const message = cartItem.length === 0 ? 'Seu carrinho está vazio' : '';
    return message;
  }

  render() {
    const { cartItem, allQuantityOfItems } = this.state;
    return (
      <BrowserRouter>
        <LinkCart
          allQuantityOfItems={ allQuantityOfItems }
          cartItem={ cartItem }
        />
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Home
              addToCart={ this.midlewareOfAddToCart }
            />) }
          />
          <Route
            exact
            path="/carrinho"
            render={ () => (<Cart
              message={ this.message }
              cartItem={ cartItem }
              addToCart={ this.midlewareOfAddToCart }
              removeToCart={ this.removeToCart }
            />) }
          />
          <Route
            exact
            path="/productDetails/:id"
            render={
              (props) => (<ProductDetails
                { ...props }
                addToCart={ this.midlewareOfAddToCart }
              />)
            }
          />
          <Route
            exact
            path="/checkout"
            render={ () => (
              <FinishPayMount
                cartItem={ cartItem }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
