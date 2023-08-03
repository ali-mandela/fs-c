import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Register from './pages/Register';
import UploadComponent from './pages/upload';
import Login from './pages/Login'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Specify the correct element or component for the root path */}
        <Route path="/" element={<Register />} />
        {/* Add more routes as needed */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<UploadComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
