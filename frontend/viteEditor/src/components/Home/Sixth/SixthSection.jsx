import React from 'react';
import { Link } from 'react-router-dom';
import './Sixth.css';

function SixthSection() {
    return (
        <div className='contact'>
            <h2>Let's BuildIt</h2>
            <input type='text' placeholder='Email Address'></input>
            <Link to=''><button className='btn-5'>Start Now</button></Link>
        </div>
    )
}

export default SixthSection