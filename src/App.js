import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Contact from './Componets/contact/Contact.js';
import ThankYou from './Componets/contact/ThankYou.js';
import Footer from './Componets/footer/Footer.js';
// import AdminHome from './Componets/Home/AdminHome.js';
import AuthPage from './Componets/Home/AuthPage.js';
import Home from './Componets/Home/Home.js'
import GetAllProjects from './Componets/Projects/GetAllProjects.js';
import Projects from './Componets/Projects/Projects.js';

function App() {

  const isAdmin = true; // replace this with your actual logic to check if the user is an admin

  const AdminRoute = ({ element, ...rest }) => {
    return isAdmin ? element : <Navigate to="/" />;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<AuthPage />} /> */}
          {/* <Route path='/Admin' element={<AdminHome />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<AuthPage />} />
          <Route path='/projectcreate' element={<AdminRoute element={<Projects />} />} />
          <Route path='/GetAllProjects' element={<GetAllProjects />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
          <Route path='/email' element={<Footer />} />
          {/* <Route path='/thanks' element={<ThankYou />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
