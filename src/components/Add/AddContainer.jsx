import React, { useState } from 'react'
import Add from './Add'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'


const AddContainer = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
      precio: '',
      nombre: '',
      tamano: '',
      descripcion: '',
      rinde: '',
      categoria: ''
    })
    const [imagenes, setImagenes] = useState([])
    const [imgsPreview, setImgsPreview] = useState([]) 
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData((prev) => ({ ...prev, [name]: value }));
    };
    
     const handleImageChange = (e) => {
      const images = e.target.files
      const imagesPreview = []
  
    for(let i = 0; i < images.length; i+=1){
      const image = images[i]
      const reader = new FileReader()
  
      reader.onloadend = ()=>{
        imagesPreview.push(reader.result)
        if(imagesPreview.length === images.length){
          setImgsPreview(imagesPreview)
        }
      }
      reader.readAsDataURL(image)
    }
      setImagenes(e.target.files);
  
    };
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
  
      for (let i = 0; i < imagenes.length; i++) {
        formData.append('imagenes', imagenes[i]);
      }
  
      try {
       
        const response = await axios.post(`https://thebakery.onrender.com/seller/add`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        if (response.status === 200) {Swal.fire({
          position: "center",
          icon: "success",
          title: "Producto añadido con éxito",
          showConfirmButton: false,
          timer: 1000
        });
          navigate("/")
        } else {
          Swal.fire({
            icon: "error",
            title: "Esto no debería suceder",
            text: "Algo ha fallado",
            
          });
          console.error('Error al crear el producto:', response.data.message);
        }
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        error.response.data.error.includes(10485760) &&
          Swal.fire({
            title: "Imagen muy grande",
            text: "Recuerde que no debe superar los 10mb",
            icon: "error"
          });
        }  
    };
          return(
          <div>
            <Add
             handleChange = {handleChange}
             handleImageChange = {handleImageChange}
             data = {data}
             handleSubmit = {handleSubmit}
             imgsPreview = {imgsPreview}
             />
          </div>
        )
}

export default AddContainer
