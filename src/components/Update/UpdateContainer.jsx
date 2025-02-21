import React, { useEffect, useState } from 'react'
import Update from './Update'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import Swal from 'sweetalert2'

const UpdateContainer = () => {
    const navigate = useNavigate();
    const {_id} = useParams();
    
    const [imgsPreview, setImgsPreview] = useState([]);
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [tamano, setTamano] = useState('');
    const [rinde, setRinde] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagenes, setImagenes] = useState('');

useEffect(()=>{
    axios.get(`https://thebakery.onrender.com/detail/${_id}`)
    .then((res)=>{
        let {nombre, precio, tamano, rinde, descripcion, categoria, imagenes} = res.data;
        setNombre(nombre);
        setPrecio(precio);
        setTamano(tamano);
        setRinde(rinde);
        setCategoria(categoria);
        setDescripcion(descripcion);
        setImagenes(imagenes);
    }
    )
    .catch((err)=>console.log(err))
},[_id])

const handleImageChange = (e)=>{
    const images = e.target.files
    const imagesPreview = []
    for(let i = 0 ; i < images.length ; i+=1 ){
        const image = images[i]
        const reader = new FileReader()

        reader.onload = ()=>{
            imagesPreview.push(reader.result)
            if(imagesPreview.length === images.length){
                setImgsPreview(imagesPreview)
            }
        }
        reader.readAsDataURL(image);
    }
    const files = e.target.files;
    if (files.length > 0) {
        setImagenes(Array.from(files))
}
}

const handleSubmit = (e)=>{
    e.preventDefault()
    let formData = new FormData();
    formData.append('nombre', nombre)
    formData.append('precio', precio)
    formData.append('tamano', tamano)
    formData.append('rinde', rinde)
    formData.append('categoria', categoria)
    formData.append('descripcion', descripcion)

    if (imagenes && imagenes.length > 0 && imagenes.length <= 2) {
        
        for (let i = 0; i < imagenes.length; i++) {
            formData.append('imagenes', imagenes[i])
        }
    }else{
        console.log("error")
    }
    try{

        axios.patch(`https://thebakery.onrender.com/seller/update/${_id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(() => {
            console.log("Editado con éxito")
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Su producto ha sido editado satisfactoriamente",
                timer: 1500
              });
              
            navigate("/")
        })
        .catch((err) => { console.log(err) })
    }catch{
        console.log("Se ha producido un error")
        Swal.fire({
            icon: "error",
            title: "Error al editar la propiedad",
          });
          

    }
}

let data = {
    nombre, setNombre,
    precio, setPrecio,
    tamano, setTamano,
    rinde, setRinde,
    categoria, setCategoria,
    descripcion, setDescripcion,
    imagenes, setImagenes
}



return (
    <div>
            <Update
                data={data}
                handleImageChange={handleImageChange}
                imgsPreview={imgsPreview}
                handleSubmit={handleSubmit}
            />
        </div>
    )
    
}

export default UpdateContainer
