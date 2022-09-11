import React from 'react';
import { Link } from 'react-router-dom';
import IMG from '../../../assets/Rectangle_1270@2x.png';
import './SecondSec.css';

function SecondSec() {
    return (
        <div className='Second'>
            <h2>Grow your online exposure with us!</h2>
            <div class="row-sec">
                <div className="column-sec">
                    <img src={IMG} alt='guy'></img>
                </div>
                <div className="column-sec">
                    <ol>
                        <li>
                            <h4>
                            <span>1.</span>Create your portfolio website</h4>
                            <p>Tell the world about who you are with our elegent designs</p>
                        </li>
                        <li>
                            <h4>
                            <span>2.</span>Create Landing Pages</h4>
                            <p>Create beautiful landing pages.</p>
                        </li>
                        <li>
                            <h4>
                            <span>3.</span>Promote your Products</h4>
                            <p>Promote your products here</p>
                        </li>
                    </ol>
                    <button className='btn-3'><Link to='/editor'>Get Started</Link></button>
                </div>
            </div>
            <h2>Our Testimonials</h2>
        </div>
    )
}

export default SecondSec