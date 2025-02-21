import React, { useEffect, useState } from 'react'
import List from './List'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'


const ListContainer = () => {
    let [data, setData] = useState([])
    let {categoria} = useParams()

    useEffect(()=>{

        axios.get(`https://thebakery.onrender.com/seller/q?categoria=${categoria}`)
        .then((res)=> setData(res.data))
        .catch((err)=> console.log(err))
    }
,[categoria])

const deleteAlert = (id, nombre)=>{
    Swal.fire({
        icon: "warning",
        title: `Estas a punto de borrar el siguiente producto : ${nombre}`,
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#00000",
        confirmButtonText: "Borrar definitivamente",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`https://thebakery.onrender.com/seller/delete/${id}`)
            .then(()=>{
                
                setData(prevData => prevData.filter(item => item._id !== id))
                Swal.fire({
                    title: `El producto ${nombre} ha sido eliminado`,
                    icon: "success"
                });
            }).catch((err)=>console.log(err))
        }
      });
    }
    return (
        <div>
            <List data={data} deleteAlert={deleteAlert}/>
        </div>
    )
}

export default ListContainer
