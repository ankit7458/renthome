// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/carousel';
import Body from './components/Body';
import Aboutus from './components/Aboutus'; // Import the AboutUs component
<<<<<<< HEAD
import Policy from './components/Policy';//Import the policy componetnt

=======
import Carddeatail from './components/Roomcards/carddeatail';
>>>>>>> c237a440a26a17b9a67ab186579feea3c1ec7fe4
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import
import Feedback from './components/Feedback';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Carousel />
        <Routes>
          <Route path="/Aboutus" element={<Aboutus />} /> {/* Render the Aboutus component for the "/aboutus" route */}
          <Route path="/" element={<Body />} />
<<<<<<< HEAD
          <Route path ="/Policy"element = {<Policy />}/> 
          <Route path ="/Feedback"element = {<Feedback />}/> 
=======
          <Route path="/roomcards/carddeatail" element={<Carddeatail />} />
>>>>>>> c237a440a26a17b9a67ab186579feea3c1ec7fe4
        </Routes>
      </div>
    </Router>
  );
}

export default App;
