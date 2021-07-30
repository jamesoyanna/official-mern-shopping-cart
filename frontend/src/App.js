import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Product from './Pages/Product/Product';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
