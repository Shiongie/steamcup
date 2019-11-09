import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function RegisterLTO() {
  return (
    <div className="Register">
        <div className="RegisterBox">
            
            <h3>Register as LTO</h3>
            <p>Register your account.</p>
           
            <div className="RegisterTextBox">
                <input type="text"  name="" placeholder="Branch code"/>
                <i class="fas fa-user"></i>
            </div>
            <div className="RegisterTextBox">
                <input type="text"  name="address" placeholder="Address"/>
                <i class="fas fa-user"></i>
            </div>
            <div className="RegisterTextBox">
                <input type="text"  name="mail" placeholder="Email"/>
                <i class="fas fa-envelope"></i>
            </div>
            <div className="RegisterTextBox">
                <input type="password"  name="pwd" placeholder="Password"/>
                <i class="fas fa-lock"></i>
            </div>
            <div className="RegisterTextBox">
                <input type="password"  name="pwd-repeat" placeholder="Confirm Password"/>
                <i class="fas fa-lock"></i>
            </div>
            <div className="RegisterButton">
                <input className="RegisterBtn" type="submit" name="signup-submit" value="Register"/>
            </div>
        
            <div className="RegisterText">Already have an account? 
                <Link className="ListStyle" to='/Login'>
                    <b>Login</b>
                </Link>
            </div>
            
        </div>
    </div>
  );
}

export default RegisterLTO;
