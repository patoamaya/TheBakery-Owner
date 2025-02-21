import React, { useEffect, useState } from 'react'
import Detail from './Detail'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DetailContainer = () => {
    const [data, setData] = useState({})
    const {_id} = useParams()
    useEffect(()=>{
        axios.get(`https://thebakery.onrender.com/detail/${_id}`)
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[_id])
    return (
        <div>
            <Detail data={data}/>
        </div>
    )
}

export default DetailContainer
