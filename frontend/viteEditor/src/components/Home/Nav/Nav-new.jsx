import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/final.png";
import { userDetailsContext } from "../../../Context";
import { useContext } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import './Nav_new.css';



function Nav_new() {
    const [islogd, setIsloged] = useContext(userDetailsContext);
    return (
        <body>
            <nav className="navbar">
                <div className="content">
                    <div className="logo">
                        <img src={logo} alt=""></img>

                    </div>
                    <ul className="menu-list">
                        
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/home">Product</Link></li>
                        <li><Link to="/home">Resources</Link></li>
                        <li><Link to="/template">Templates</Link></li>
                        {!islogd ?
                            <>
                                <button className='button-1'><Link to="/">Login</Link></button>
                                <button className='button-2'><Link to="/register">Signup</Link></button>
                            </>
                            :
                            <button className='button-1'><Link to="/">Logout</Link></button>
                        }


                    </ul>
                    
                </div>
            </nav>
        </body>
    )
}

export default Nav_new;