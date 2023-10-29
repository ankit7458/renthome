// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/carousel';
import Body from './components/Body';
import Aboutus from './components/Aboutus'; // Import the AboutUs component
import Policy from './components/Policy';//Import the policy componetnt
import Carddeatail from './components/Roomcards/carddeatail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import
import Feedback from './components/Feedback';
import PostProperty from './components/Carousel Components/PostProperty';

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
          <Route path ="/Feedback"element = {<Feedback />}/> 
          <Route path ="/PostProperty"element = {<PostProperty />}> 
            {/* <Route path ="/PostPropertyHome"element = {<PostPropertyHome />}/> 
            <Route path ="/UploadPictures"element = {<UploadPictures />}/>  */}
          </Route>
          <Route path="/roomcards/carddeatail" element={<Carddeatail />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
