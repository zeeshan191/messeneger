import React, { useState } from 'react';
import Layout from '../../components/Layout';

import { signup } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import P from '../../P';
/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  const registerUser = (e) => {
    
    e.preventDefault();

    const user = {
      firstName, lastName, email, password
    }
    
    dispatch(signup(user))
  }


  if(auth.authenticated){
    return <Redirect to={`/`} />
  }

  return(
    <Layout>
    <P/>
      <div className="registerContainer">
      <div className="login-box">
      <h2>Sign up</h2>
          <form onSubmit={registerUser}>

          
            <div class="user-box">
          <input 
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <label>firstName</label>
</div>

<div class="user-box">
            <input 
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
            <label>LastName</label>
            </div>
            <div class="user-box">
            <input 
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <label>Email ID</label>
            </div>
            <div class="user-box">
            <input 
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <label>Password</label>
            </div>
            <div>
              <button>Sign up</button>
            </div>



          </form>
          </div>
      </div>
    </Layout>
   )

 }

export default RegisterPage