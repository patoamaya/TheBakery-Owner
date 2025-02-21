import React from 'react'
import './Detail.css'
import {Hearts} from 'react-loader-spinner'

const Detail = ({data}) => {
    const {nombre, imagenes, descripcion, rinde, precio, tamano } = data  
    return (
        <div className='detail-container-all'>
            <div className="detail-container">
                {
                    imagenes ?
                    <div className="detail-container-inside">
                    <div className="detail-img-info-container">
                        <div className="detail-img-info1">
                            <img src={imagenes[0]?.url} alt="" className='detail-img1' />
                            <div className="detail-info1">
                            <p className='detail-title'>{nombre}</p>
                            <p>Rinde: {rinde} porciones.</p>
                            </div>
                        </div>
                        <div className="detail-img-info2">
                            <div className="detail-info2">

                           {tamano ? <p>Tamaño: {tamano} cm.</p> : <p>Consultar tamaño</p>}   
                            <p>Descripcion: {descripcion}</p>
                            </div>
                            <img src={imagenes[1]?.url} alt="" className='detail-img2' />
                        </div>
                </div>
                    <div className="detail-title-price-container">
                        <ul>
                        {precio ? <li><p>$ {precio}</p></li> : <li><p className='no-price'>Consultar precio</p></li>}
                        {tamano && <li><p>Consultar por otros tamaños</p></li>}
                        </ul>
                    </div>
                    </div>
                    :
                    <div className='loader'>
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
                }
            </div>
          </div>
    )
}

export default Detail


