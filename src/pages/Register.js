import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance'; // Import the axios instance
import './register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axiosInstance.post('/register', {
        username,
        email,
        password,
      });
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Error during registration: ' + error.response.data.message);
    }
  };

  return (
        <div className="register-container">
          <div className="register-form">
            <h2>Register</h2>
            {error && <div className="error-message">{error}</div>}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            <p>
              Already registered? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      );
}

export default Register;
