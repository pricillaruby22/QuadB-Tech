import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate login by updating Redux state with email and password
    dispatch(login());
    //alert('Login Successful!');
    navigate('/tasks'); // Redirect to the To-Do page
  };

  const handleLogout = () => {
    dispatch(logout());
    alert('You have been logged out!');
    navigate('/'); // Redirect to the login page
  };

  return (
    <div style={styles.container}>
      
      {isAuthenticated ? (
        <div>
          
          <button  className='logout-btn' onClick={handleLogout} style={styles.button}>Logout</button>
        </div>
      ) : (
        <div  class="login-page">
          <center><h1>Advanced To-Do Application</h1></center>
          <h2>Ready to Tackle Your To-Do List? Log In Now...</h2>
          <div style={styles.form}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleLogin} style={styles.button}> Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  
  container: {
    textAlign: 'center',
    marginTop: '10px', 
    backgroundAttachment:'fixed',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    width: '250px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'navy',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
    width:'270px',
  },
};

export default Login;
