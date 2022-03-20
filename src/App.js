import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProductItems from './components/ProductItems';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/productitems/:id' component={ProductItems} />
          <Route exact path='/about' component={About} />
          <Route exact path='/Contact' component={Contact} />
          <Route path="*" component={()=> <h2>404 Page not found</h2>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
