import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function RegisterAs() {
  return (
    <div className="RegisterAs">
      <div className="RegisterAsBox">
        <h3>Register As</h3>
        <p>Select the usr type you want to register.</p>

        <div className="RegisterAsButtons">
          <Link to='/Register'>
            <input className="RegisterAsBtn" type="button" name="" value="BLECHER REPORTER"></input>
          </Link>
        </div>
        
        <div className="RegisterAsButtons">
          <Link to='/RegisterLTO'>
            <input className="RegisterAsBtn" type="button" name="" value="LTO PATROL"></input>
          </Link>
        </div>
        
        <div className="RegisterAsText">Already have an account? 
          <Link className="ListStyle" to='/Login'>
            <b>Login</b>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterAs;
