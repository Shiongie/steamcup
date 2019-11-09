import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className="Login">
      <div className="LoginMainBox">
        <form action="" method="post">
          <h3>Welcome!</h3>
          <p>Login your account to connect with us.</p>

          <div className="LoginTextBox">
            <input type="email" name="mailuid" placeholder="Email"></input>
            <i class="fas fa-envelope"></i>
          </div>

          <div className="LoginTextBox">
            <input type="password" name="pwd" placeholder="Password"></input>
            <i class="fas fa-lock"></i>
          </div>
          <div className="LoginText">Forgot Password?</div>
          <div className="LoginButton">
            <Link to="/Main">
              <input className="LoginBtn" type="submit" name="login-submit" value="LOGIN"/>
            </Link>
          </div>
          <div className="LoginText">Don't have an account? 
            <Link className="ListStyle" to='/RegisterAs'>
              <b>Sign Up</b>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
