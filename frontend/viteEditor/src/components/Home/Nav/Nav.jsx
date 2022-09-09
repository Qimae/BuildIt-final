import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/final.png";
import { userDetailsContext } from "../../../Context";
import { useContext } from 'react';
import './Nav.css';


function Nav() {
  const [islogd, setIsloged] = useContext(userDetailsContext);

  return (
    <div className="navbar">

      <div className="nav-header">
        <div className="nav-logo">
          <Link to="#">
            <img src={logo} width="100px" alt="logo"></img>
          </Link>
        </div>
      </div>

      <input type="checkbox" id="nav-check"></input>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to='/home'>Home</Link>
        <Link to='/'>Product</Link>
        <Link to='/'>Resources</Link>
        <Link to='/template'>Templates</Link>
        {!islogd ?
          <>
            <button className="loginBtn1">Log in</button>
            <button className="loginBtn2">Sign Up</button>
          </>
          :
          <button className="loginBtn3">Log out</button>
        }

      </div>

    </div>
  )
}

export default Nav