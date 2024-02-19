import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import firebase from './firebaseConfig';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, pass);
      if (user) {
        alert('Login Successfully');
        navigate('/')
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      alert('Logged out successfully');
      navigate('/'); // Redirect to the home page after logout
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <>
      <div className='main_contain'>
        <div className='head'>
          <h2>Login</h2>
        </div>
        <div className='box'>
          <input type='text' value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='box'>
          <input type='password' value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)} />
        </div>
        <p>
          Don't Have An Account ?? <Link to='/signup'>Create Account</Link>
        </p>
        <button onClick={submit}>Login</button>
        
      </div>
    </>
  );
};

export default Login;