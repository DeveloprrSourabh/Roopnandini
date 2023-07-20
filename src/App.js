import './App.css';
// import About from './components/About.js';
import Home from './components/Home.js';
import $ from "jquery";
import ReactDOM from 'react-dom/client';
 import {   Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'; 


function App() {
  return (
  <>
   <Router>
      <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
         </Router>
  </>
  );
}

export default App;
