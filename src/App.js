// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/carousel';
import Body from './components/Body';
import Aboutus from './components/Aboutus'; // Import the AboutUs component
import Policy from './components/Policy';//Import the policy componetnt

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Carousel />
        <Routes>
          <Route path="/Aboutus" element={<Aboutus />} /> {/* Render the Aboutus component for the "/aboutus" route */}
          <Route path="/" element={<Body />} />
          <Route path ="/Policy"element = {<Policy />}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
