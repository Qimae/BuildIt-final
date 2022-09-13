import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import axiosInstanceapi from "../../axiosApi";

import { useParams } from 'react-router-dom'
import { Helmet } from "react-helmet";

function Previewp() {

    const [tempprev, setTemp] = useState([])
    const [js, setJs] = useState(null)
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        axiosInstanceapi.get(`page-detail/${id}/`).then((response) => {
            // console.log(response)
            const html = response.data.html

            const css = response.data.css
            const js = response.data.js
            const temp = `${html}<style>${css}</style>`
            setTemp(temp)
            setJs(js)
            console.log(tempprev)

        })
    }, [])

    return ( 
    <div >
        
        <div dangerouslySetInnerHTML = {
            { __html: tempprev } }
        /> 
        <Helmet>
            <script>{js}</script>
        </Helmet>
        
        </div>
    )
}

export default Previewp