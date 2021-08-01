import './index.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />
      <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/blogs/:id'>
           <BlogDetails />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
