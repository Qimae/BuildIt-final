import React from 'react';
import FirstSec from './First_sec/FirstSec';
import SecondSec from './SecondSec/SecondSec';
import FifthSection from './Fifth/FifthSection';
import SixthSection from './Sixth/SixthSection';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';

function Home() {
    return (
        <div className='Home'>
            <Nav />
            <FirstSec />
            <SecondSec />
            <FifthSection />
            <SixthSection />
            <Footer />
        </div>
    )
}

export default Home