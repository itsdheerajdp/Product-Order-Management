import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Orders from './features/orders/Orders';
import './App.css';

function App() {

  return (
    <div className="app">
      <Navbar />
    

            <Orders />
    
      

    </div>
  );
}

export default App;
