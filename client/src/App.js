import './App.css';
import img from './assets/rocket.png'
import Signup from './components/Register/Signup'
import Topbar from './components/Navbar/Topbar';
import Home from './components/pages/Home/Home';
function App() {
  return (
    <div>
      <Home/>
      {/* <Topbar/> */}
    {/* <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-5'>
          <Signup/>
        </div>
        <div className='col-md-7 my-auto'>
          <img className='img-fluid w-100' src={img}/>
        </div>
      </div>
    </div> */}
    </div>
  );
}

export default App;
