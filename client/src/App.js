import './App.css';
import img from './assets/rocket.png'
import Signup from './components/Signup';
function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col1'>
          <Signup/>
        </div>
        <div className='col2'>
          <img className='img ' src={img}/>
        </div>
      </div>
    </div>
  );
}

export default App;
