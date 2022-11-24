import logo from './logo.svg';
import './App.css';
import Products from './Components/Products/Products';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Routing from './Components/Routing/Routing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
