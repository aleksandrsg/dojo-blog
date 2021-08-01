import './index.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />
      <div className="content">
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
