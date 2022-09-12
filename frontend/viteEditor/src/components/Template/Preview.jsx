import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import axiosInstanceapi from "../../axiosApi";
import { Helmet } from "react-helmet";

function Preview() {

    const [tempprev, setTemp] = useState([])
    const [js, setJs] = useState(null)
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        axiosInstanceapi.get(`templete-detail/${id}/`).then((response) => {
            console.log(response.data[0])
            const html = response.data[0].html

            const css = response.data[0].css
            const js = response.data[0].js
            const temp = `${html}<style>${css}</style>`
            setTemp(temp)
            setJs(js)
            console.log(tempprev)

        })
    }, [])

    return ( 
    <div >
        <Helmet>
            <script>{js}</script>
        </Helmet>
        <div dangerouslySetInnerHTML = {
            { __html: tempprev } }
        /> </div>
    )
}

export default Preview