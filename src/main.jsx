import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './Pages/HomePage' 
//TODO: Finish responsiveness for HomePage
// import Competitions from './Pages/Competitions'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)
