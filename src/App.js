// import logo from './logo.svg';
import React from 'react';
import Home from './components/pages/Home';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import NotFound from './components/pages/NotFound';
import AddUser from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
import ViewUser from './components/Users/ViewUser';
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/users/add" element={<AddUser/>}></Route>
            <Route exact path="/users/edit/:id" element={<EditUser/>}></Route>
            <Route exact path="/users/:id" element={<ViewUser></ViewUser>}></Route>
            <Route element={<NotFound/>}></Route>
          </Routes>

          {/* <Home></Home> */}
          {/* <About></About>
        <Contact></Contact> */}
        </div>
      </Router>
    </>
  );
}

export default App;
