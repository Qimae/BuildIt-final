import React from 'react';
import './Footer.css';
import logo from '../../../assets/final.png'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer class="fixed_footer">
            <div class="row-footer">
                <div className="column-footer">
                    <img src={logo} alt=""></img><br></br>
                    <p>Easy to use website that will help you to make your own single page portfolio
                        website in just a few minutes.
                    </p><br></br>
                    <span>All rights reserved @2022</span>
                </div>
                <div className="column-footer">
                    <h2>Templates</h2><br></br>
                    <ul>
                        <li><Link to='/'>Porfolio</Link></li><br></br>
                        <li><Link to='/'>Landing Page</Link></li><br></br>
                        <li><Link to='/'>Services</Link></li>
                    </ul>


                </div>
                <div className="column-footer">
                    <h2>Products</h2><br></br>
                    <ul>
                        <li><Link to='/'>Home</Link></li><br></br>
                        <li><Link to='/'>Careers</Link></li><br></br>
                    </ul>

                </div>
                <div className="column-footer">
                    <h2>Resources</h2><br></br>
                    <ul>
                        <li><Link to='/'>Blog</Link></li><br></br>
                        <li><Link to='/'>OpenSource</Link></li><br></br>
                    </ul>


                </div>
            </div>
        </footer>
    )
}

export default Footer