import React, { useState } from 'react'
import './login.css';

function Login() {
  return (
    <form className="App">
        <div className="form-inner">
            <h2>Login</h2>
            {/* ERROR! */}
            <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" />
            </div>

            <div className='buttons'>
                <input type="submit" value="LOGIN" />
                <input type="submit" value="REGISTER" />
            </div>
            
        </div>
    </form>
  )
}

export default Login