// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/carousel';
import Body from './components/Body';
import Aboutus from './components/Footer_Components/Aboutus'; // Import the AboutUs component
import Policy from './components/Footer_Components/Policy';//Import the policy componetnt
import Carddeatail from './components/Roomcards/Carddetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import
import Feedback from './components/Footer_Components/Feedback';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Footer_Components/Aboutus" element={<Aboutus />} /> {/* Render the Aboutus component for the "/aboutus" route */}
          <Route path="/" element={<Body />} />
          <Route path="/Footer_Components/Policy" element={<Policy />} />
          <Route path="/Footer_Components/Feedback" element={<Feedback />} />
          {/* <Route path ="/Footer_Components/Footer"element = {<Feedback />}/> */}
          <Route path="/Roomcards/Carddetail/:cardkey" element={<Carddeatail />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
