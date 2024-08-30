import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/login', {
        email,
        password,
      });
      console.log(response.data);

      // Assuming the response structure is { token, user: { name, role, _id } }
      const { token, user } = response.data;

      // Store token and user details in session storage
      sessionStorage.setItem('name', user.name);
      sessionStorage.setItem('role', user.role);
      sessionStorage.setItem('userId', user.userId);
      sessionStorage.setItem('token', response.data.token);

      alert('Login successful');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url('/path-to-your-ecommerce-background.jpg')`, // Replace with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="xs" sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        padding: 4, 
        borderRadius: 2, 
        boxShadow: 3 
      }}>
        <Typography variant="h4" gutterBottom align="center">
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button 
            type="submit" 
            fullWidth 
            variant="contained" 
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Link to='/register'>Register</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
