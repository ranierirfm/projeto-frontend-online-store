import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
