import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/carousel'
import Body from './components/Body';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Carousel />
        <Body />
        
    </div>
  );
}

export default App;
