import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Hearts} from 'react-loader-spinner'

const Home = ({data, pageData, deleteAlert}) => {
    let {handlePageChange, currentPage, totalPages, loading} = pageData
    return (
        <main className='home-container'>
            <h1 className='home-title'>Todos</h1>

        <div className='all-cards-container'>
            {


                loading ? 
                <div className="loader">
                <Hearts
                    height="240"
                    width="260"
                    color="#f3f3f3"
                    ariaLabel="hearts-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />
                    <p>Cargando...</p>
                    </div>
                :
                data.map((dato)=>{
                    let {nombre, imagenes, _id, precio} = dato
                    return(
                        <div className="card-container" key={_id}>
                    <Link to={`/detail/${_id}`}>
                        <div className="card-img-container">
                            <img src={imagenes[0]?.url} alt="" className='card-img' />
                        </div>
                        <div className="card-info">
                            <p className='card-name'>{nombre}</p>
                           {precio && <h4>$ {precio.toLocaleString()}</h4>}  
                        </div>
                    </Link>
            <div className="card-links">
                
                <Link to={`/update/${_id}`}>
                    <EditIcon
                        className="link-icon"
                        color="primary"
                        fontSize="large"
                        />
                </Link>
                <DeleteIcon
                    className="link-icon"
                    color="error"
                    fontSize="large"
                    onClick={()=>deleteAlert(_id, nombre)}/>
            </div>
    </div>
        )   
    }       
)

}
    </div>

    <div className={loading ? "disabled" : "page-container"}>
        <Button variant="contained" color="secondary" onClick={()=>{handlePageChange(currentPage - 1)}}disabled={currentPage === 1}>
        anterior
        </Button>

            <h3>{currentPage} / {totalPages}</h3>

        <Button variant="contained" color="secondary" onClick={()=>{handlePageChange(currentPage + 1)}}  disabled={currentPage === totalPages}>
        siguiente
        </Button>
    </div>
</main>
        )
}

export default Home
