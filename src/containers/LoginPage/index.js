/*eslint-disable*/
import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { signin, isLoggedInUser } from '../../actions';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import P from '../../P'
/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  // useEffect(() => {
  //   if(!auth.authenticated){
  //     dispatch(isLoggedInUser())
  //   }
  // }, []);




  const userLogin = (e) => {
    e.preventDefault();

    if(email == ""){
      alert("Email is required");
      return;
    }
    if(password == ""){
      alert("Password is required");
      return;
    }

    dispatch(signin({ email, password }));
    




  }


  if(auth.authenticated){
    return <Redirect to={`/`} />
  }


  function pop (e) {
    let amount = 30;
    switch (e.target.dataset.type) {
      case 'shadow':
      case 'line':
        amount = 60;
        break;
    }
    // Quick check if user clicked the button using a keyboard
    if (e.clientX === 0 && e.clientY === 0) {
      const bbox = e.target.getBoundingClientRect();
      const x = bbox.left + bbox.width / 2;
      const y = bbox.top + bbox.height / 2;
      for (let i = 0; i < 30; i++) {
        // We call the function createParticle 30 times
        // We pass the coordinates of the button for x & y values
        createParticle(x, y, e.target.dataset.type);
      }
    } else {
      for (let i = 0; i < amount; i++) {
        createParticle(e.clientX, e.clientY + window.scrollY, e.target.dataset.type);
      }
    }
  }
  function createParticle (x, y, type) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    let width = Math.floor(Math.random() * 30 + 8);
    let height = width;
    let destinationX = (Math.random() - 0.5) * 300;
    let destinationY = (Math.random() - 0.5) * 300;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 200;
    
    switch (type) {
      case 'square':
        particle.style.background = `hsl(${Math.random() * 90 + 270}, 70%, 60%)`;
        particle.style.border = '1px solid white';
        break;
      case 'emoji':
        particle.innerHTML = ['❤','🧡','💛','💚','💙','💜','🤎'][Math.floor(Math.random() * 7)];
        particle.style.fontSize = `${Math.random() * 24 + 10}px`;
        width = height = 'auto';
        break;
      case 'mario':
        particle.style.backgroundImage = 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/mario-face.png)';
        break;
      case 'shadow':
        var color = `hsl(${Math.random() * 90 + 90}, 70%, 50%)`;
        particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}`;
        particle.style.background = color;
        particle.style.borderRadius = '50%';
        width = height = Math.random() * 5 + 4;
        break;
      case 'line':
        var color = `hsl(${Math.random() * 90 + 90}, 70%, 50%)`;
        particle.style.background = 'black';
        height = 1;
        rotation += 1000;
        delay = Math.random() * 1000;
        break;
    }
    
    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    const animation = particle.animate([
      {
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
        opacity: 1
      },
      {
        transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
        opacity: 0
      }
    ], {
      duration: Math.random() * 1000 + 5000,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      delay: delay
    });
    animation.onfinish = removeParticle;
  }
  function removeParticle (e) {
    e.srcElement.effect.target.remove();
  }
  
  if (document.body.animate) {
    document.querySelectorAll('button').forEach(button => button.addEventListener('click', pop));
  }

  return(
    <Layout>
    <P/>
      <div className="loginContainer">
      
        <div className="login-box">
        <h2>Login</h2>
          <form onSubmit={userLogin}>
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
            <div class="wrapper">
            
            <button data-type="emoji">Login</button>
            
          </div>
          <span class="preloader"></span>

          </form>
          </div>
     
      </div>
    </Layout>
   )

 }

export default LoginPage