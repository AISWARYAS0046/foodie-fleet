import React, { useEffect, useState } from 'react';
import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css";
import axios from 'axios';
// import videoFile from '../Components/images/v1.mp4';

function Login() {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/login/get`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const authenticate = (e) => {
    e.preventDefault();

    // Check if the entered username and password match any user
    const userCheck = user.find(user => user.username === username && user.password === password);

    // Validate username and password
    if (username.length === 0) {
      alert("Please enter your username.");
    } else if (password.length === 0) {
      alert("Please enter your password.");
    } else if (!userCheck) {
      alert("Wrong username or password!");
    } else {
      console.log(user)
      // Navigate to the home page
      localStorage.setItem("username",username)
      nav("/home");
    }
  };

  return (
    <div id="body">
      {/* <div className="background-video">
      <video autoPlay muted loop>
        <source src={videoFile} type="video/mp4" />
       
      </video> */}
      <div className="content">
        {

        }
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>FOODIE FLEET</h1>
            <p>Enter your Credentials to Login</p>
            
          </div>
          <form>
            <div className="input">
              <i className="fa-solid fa-user"></i>
              <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            </div>
            <div className="input">
              <i className="fa-solid fa-lock"></i>
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <input onClick={authenticate} className="signup-btn" type="submit" value="LOGIN" />
          </form>
          
          <Link to="/register">
            <p>No Account? Signup Now!</p>
          </Link>
        </div>
      </div>
    </div>
      </div>
    
  );
}

export default Login;