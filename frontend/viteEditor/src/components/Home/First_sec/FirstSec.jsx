import React from 'react'
import { Link } from 'react-router-dom'
import './FirstSec.css';
import bold from '../../../assets/Bold.jpg'

function FirstSec() {
    return (
        <div class="row">
            <div className="column">
               <img src={bold} className='bold'></img>
            </div>
            <div className="column">
                <h2>Build your online<br></br>presence here</h2>
                <p>Easy-to-use website that will help you to make your own single page
                portfolio website in just a few minutes</p>
                <button className='btn-1'><Link to='/'>Get Started</Link></button>
                <button className='btn-2'><Link to='/'>Explore</Link></button>
            </div>
        </div>
    )
}

export default FirstSec