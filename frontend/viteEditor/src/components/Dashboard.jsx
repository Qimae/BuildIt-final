import React from 'react';
import logo from "../assets/final.png";
import { Link } from 'react-router-dom';
import { FaCode, FaBookOpen, FaBook, FaSave, FaHome, FaEject, FaPowerOff, FaSignInAlt } from 'react-icons/fa';
import './Dashboard.css';
import { userDetailsContext } from "../Context";
import { useContext } from 'react';

function Dashboard() {
    const [islogd, setIsloged] = useContext(userDetailsContext);

    return (
        <div className='Dashboard' >
            <div className="sidebar">
                <div className='logo'>
                    <img src={logo} width="100px" alt="logo"></img>
                </div>
                <Link to="/home"><FaHome /></Link>
                <div className='hide'>Home</div>
                <Link to="/pages"><FaBook /></Link>
                <div className='hide'>Pages</div>
                <Link to="/template"><FaBookOpen /></Link>
                <div className='hide'>Templates</div>
                <Link to="/editor"><FaCode /></Link>
                <div className='hide'>Editor</div>
                {!islogd ?
                    <>
                        <Link to="/"><FaSignInAlt /></Link>
                        <div className='hide'>Login</div>
                    </>
                    :
                    <>
                    <Link to="/logout"><FaPowerOff /></Link>
                    <div className='hide'>Logout</div>
                    </>
                }

            </div>
        </div>

    )
}

export default Dashboard