import React from 'react'
import ReactDOM from 'react-dom/client'
// import HomePage from './Pages/HomePage' 
//TODO: Finish responsiveness for HomePage
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';

// import Competitions from './Pages/Competitions'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HomePage />
      {/* <Competitions /> */}
  </React.StrictMode>,
)
