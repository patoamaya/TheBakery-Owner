import { useEffect, useState } from 'react'
import Home from './Home'
import axios from 'axios'
import Swal from 'sweetalert2'

const HomeContainer = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(true)

    const productsPerPage = 8;


    useEffect(()=>{
        setLoading(true)
        axios.get('https://thebakery.onrender.com/seller', {
            params:{
                page: currentPage,
                limit: productsPerPage
            }
        })
        .then((res)=>{
            setData(res.data.findAll)
            setTotalPages(res.data.totalPages)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
        })
        
    },[currentPage])

    const handlePageChange = (newPage)=>{
        if(newPage < 1 || newPage > totalPages) 
            return
        setCurrentPage(newPage)
    }


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

    let pageData = {
        loading, handlePageChange, totalPages, currentPage
    }

    
    return (
        <div>
            <Home data={data}
             pageData={pageData}
             deleteAlert={deleteAlert} />
        </div>
        )
}

export default HomeContainer
