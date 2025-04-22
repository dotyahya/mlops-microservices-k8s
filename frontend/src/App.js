import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  // State management for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Login handler
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8001/api/auth/login/', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.access);
      alert('Login successful');
    } catch (error) {
      alert('Login failed');
    }
  };

  // Signup handler
  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:8001/api/auth/register/', {
        email,
        password,
      });
      alert('Signup successful');
    } catch (error) {
      alert('Signup failed');
    }
  };

  // Forgot password handler
  const handleForgotPassword = async () => {
    try {
      await axios.post('http://localhost:8001/api/auth/forgot-password/', {
        email,
      });
      alert('Password reset email sent');
    } catch (error) {
      alert('Error sending email');
    }
  };

  // Component rendering
  return (
    <Router>
      <Switch>
        {/* Login Route */}
        <Route exact path="/">
          <h1>Login</h1>
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
          <button onClick={handleLogin}>Login</button>
        </Route>

        {/* Signup Route */}
        <Route path="/signup">
          <h1>Signup</h1>
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
          <button onClick={handleSignup}>Signup</button>
        </Route>

        {/* Forgot Password Route */}
        <Route path="/forgot-password">
          <h1>Forgot Password</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleForgotPassword}>Reset Password</button>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
