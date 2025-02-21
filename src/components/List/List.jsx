import React from 'react'
import '../Home/Home.css'
import {Link} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UseCaps from '../../utils/useCaps';

const List = ({data, deleteAlert}) => {
    let {useCaps} = UseCaps()
    return (
        <div className='home-container'>
            <h1 className='home-title'>{data.length != 0 && useCaps(data[0]?.categoria)}</h1>

        <div className='all-cards-container'>
            {
                data.length === 0 ?
                <div className="no-data">
                    <p>¡No hay nada aun!</p> 
                </div> 
                :
                data.map((dato)=>{
                    let {nombre, imagenes, _id} = dato
                    return(
                        <div className="card-container" key={_id}>
                        <Link to={`/detail/${_id}`}>
                            <div className="card-img-container">
                                <img src={imagenes[0]?.url} alt="" className='card-img' />
                            </div>
                            <div className="card-info">
                            <p className='card-name'>{nombre}</p>
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
})
}
        </div>
</div>
    )
}

export default List
