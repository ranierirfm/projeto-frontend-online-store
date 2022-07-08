import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LinkCart from './Components/LinkCart/LinkCart';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <LinkCart />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/carrinho" component={ Cart } />
          <Route exact path="/productDetails/:id" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
