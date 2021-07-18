import './index.css';
import Navbar from './Navbar.js';
import Home from './Home.js';

const App = () => {

  const title = 'This is Dynamic Value';
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
