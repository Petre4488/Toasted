import React from 'react'
import ReactDOM from 'react-dom/client'
//TODO: Finish responsiveness for HomePage
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import Competitions from './Pages/Competitions';
import {Route, Routes,  BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Sponsors from './Pages/Sponsors';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* We use routes (old switch) so that react will switch between pages, that way we only see one page at a time */}
      <Router>
        <NavBar className='navbar' />
        <div className='pageContent'>
        <Routes>
          <Route index element={<HomePage />} /> 
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
        </div>
      </Router>

  </React.StrictMode>
)
