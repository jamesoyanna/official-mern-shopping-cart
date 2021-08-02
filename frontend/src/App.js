import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
// Pages
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Product from './Pages/Product/Product';

// Components
import Navbar from './components/Navbar/Navbar';
import Backdrop from './components/Backdrop/Backdrop';
import Sidedraw from './components/Sidedraw/Sidedraw';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <main>
        <Navbar click={() => setSideToggle(true)} />
        <Sidedraw show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
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
