import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import Competitions from './Pages/Competitions';
import {Route, Routes,  BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Sponsors from './Pages/Sponsors';
import Footer from './Components/Footer';
import Dashboard from './Pages/Dashboard'
import Login from './Pages/SignIn'
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* We use routes (old switch) so that react will switch between pages, that way we only see one page at a time */}
      <ChakraProvider>
        <Router>
          <NavBar className='navbar' />
          <div className='pageContent'>
          <Routes>
            <Route index element={<HomePage />} /> 
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          </div>
          <Footer />
        </Router>
      </ChakraProvider>

  </React.StrictMode>
)
