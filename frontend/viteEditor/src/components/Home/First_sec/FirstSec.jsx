import React from 'react'
import { Link } from 'react-router-dom'
import './FirstSec.css';

function FirstSec() {
    return (
        <div class="row">
            <div className="column">
                <div className='column-image'></div>               
            </div>
            <div className="column">
                <h2>Build your online<br></br>presence here</h2>
                <p>Easy-to-use website that will help you to make your own single page
                portfolio website in just a few minutes</p>
                <button className='btn-1'><Link to='/editor'>Get Started</Link></button>
                <button className='btn-2'><Link to='/template'>Explore</Link></button>
            </div>
        </div>
    )
}

export default FirstSec