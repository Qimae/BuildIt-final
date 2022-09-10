import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaBookOpen, FaBook, FaSave } from 'react-icons/fa';
import './Dashboard.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import grapesjs from 'grapesjs';



function Dashboard() {
    const { id } = useParams()
    const [edi, setEdi] = useState(null)
    const [saveContent, setSaveContent] = useState(null)

    useEffect(() => {

        const editor = grapesjs.init({
            container: "#editor",

            storageManager: {
                type: 'remote',
                autosave: true, // Store data automatically
                urlStore: `http://localhost:8000/page-update/${id}`
            }
        })
        editor.Panels.addButton
            ('options',
                [{
                    id: 'save-db',
                    className: 'fa fa-floppy-o',
                    command: 'save-db',
                    attributes: { title: 'Save DB' }
                }]
            );

        setEdi(editor)


    }, [])

    // console.log(editor)

    return (
        <div className='Dashboard'>
            <nav className="main-menu">
                <h2>Logo</h2>
                <ul>
                    <li>
                        <Link to="/home">
                            <i className="fa fa-home fa-2x"></i> 
                            <span className="nav-text">
                                Home
                            </span>
                        </Link>

                    </li><br></br>
                    <li className="has-subnav">
                        <Link to="/templates">
                            <i className="fa fa-laptop fa-2x"></i>
                            <span className="nav-text">
                                Templates
                            </span>
                        </Link>

                    </li><br></br>

                    <li className="has-subnav">
                        <Link to="#">
                            <i className="fa fa-folder-open fa-2x"></i>
                            <span className="nav-text">
                                Pages
                            </span>
                        </Link>

                    </li><br></br>
                    <li className="has-subnav">
                        <Link to="#">
                            <i className="fa fa-code fa-2x"></i>
                            <span className="nav-text">
                                Editor
                            </span>
                        </Link>
                    </li>
                </ul>

                <ul className="logout">
                    <li>
                        <Link to='/logout'>
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">
                                Logout
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Dashboard