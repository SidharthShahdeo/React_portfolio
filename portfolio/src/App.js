import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import './App.css';
import Navbar from './Components/Navbar1';
import {Outlet} from "react-router-dom"

function App() {
  return (
    <div className="container-fluid px-0 position-relative">
      <Navbar/>
      <div className='col'>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
