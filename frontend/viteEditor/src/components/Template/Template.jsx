import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer/Footer'
import Nav from '../Home/Nav/Nav'
import TemplateCard from './TemplateCard'
// import Maptemp from './maptemp'

function Template() {
    return (
        <>
            <Nav />
            <TemplateCard />
            <Footer />

        </>
    )
}

export default Template