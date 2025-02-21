import React from 'react'
import './Add.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {Link, useNavigate} from 'react-router-dom'
import { InputLabel, MenuItem, Select, FormControl} from '@mui/material'

const Add = ({handleImageChange, handleChange, data, handleSubmit, imgsPreview}) => {
    let navigate = useNavigate()
    let {precio, nombre, tamano, rinde, categoria, descripcion } = data

    return (
        <div className='add-container'>
        <h2 className='add-title'>Agregar producto</h2>
        <div className="add-back-btn">
          <Button variant="contained" color="secondary"  className='add-back-btn' onClick={()=>navigate(-1)}>
            Atras
          </Button>
        </div>
        
        <form action="" className='add-form' encType="multipart/form-data" onSubmit={handleSubmit}>
          <TextField
            className='add-input'
            name='nombre'
            label="Nombre"
            value={nombre ? nombre : ""}
            helperText={nombre.length > 0 ? "" : "Agregue un nombre"}
            onChange={handleChange}
            required
            color='primary'
            sx={{
              '& .MuiInputBase-root': {
                backgroundColor: '#f3f39f'
              },
              '& .MuiInputLabel-root': {
                color: '#000000'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#000000'
              },
            }}
          />
          <TextField
            className='add-input'
            name='precio'
            label="Precio"
            value={precio ? precio : ""}
            helperText={precio.length > 0 ? "" : "Agregue un valor"}
            type='number'
            onChange={handleChange}
            color='primary'
            sx={{
              '& .MuiInputBase-root': {
                backgroundColor: '#f3f39f'
              },
              '& .MuiInputLabel-root': {
                color: '#000000'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#000000'
              },
            }}
            />  
         
         <FormControl variant="outlined" sx={{ minWidth: 180 }}>
          <InputLabel id="categoria">Categoria</InputLabel>
          <Select
            className='add-input'
            id="categoria"
            name='categoria'
            value={categoria ? categoria : ""}
            label="Categoria"
            labelId='categoria'
            onChange={handleChange}
            defaultValue={""}
            required
            color='primary'
            sx={{
              '& .MuiSelect-select': {
                backgroundColor: '#f3f39f', 
                color: '#000000', 
              },
              '& .MuiInputLabel-root': {
                color: '#000000',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#000000', 
              },
              '& .MuiSelect-icon': {
                color: '#000000', 
              }
            }}
            >
            <MenuItem value = 'torta'>Torta</MenuItem>
            <MenuItem value = 'budin'>Budin</MenuItem>
            <MenuItem value = 'box'>Box</MenuItem>
            <MenuItem value = 'miniPasteleria'>Mini pasteleria</MenuItem>
            <MenuItem value = 'navidad'>Navidad</MenuItem>
            <MenuItem value = 'sanValentin'>San Valentin</MenuItem>
            <MenuItem value = 'pascua'>Pascua</MenuItem>
            <MenuItem value = 'diaPadre'>Dia del padre</MenuItem>
            <MenuItem value = 'diaMadre'>Dia de la madre</MenuItem>
            <MenuItem value = 'fechasPatrias'>Fechas patrias</MenuItem>
            <MenuItem value = 'cumpleanos'>Cumpleaños</MenuItem>
            <MenuItem value = 'catering'>Catering</MenuItem>
            <MenuItem value = 'salado'>Salado</MenuItem>
  
          </Select>
        </FormControl>
          <TextField
            className='add-input'
            name='tamano'
            label="Tamaño"
            helperText={tamano && tamano.length > 0 ? "" : "Agregue el tamaño"}
            value={categoria === 'torta' || categoria === 'budin' || categoria === 'cumpleanos' || categoria === 'box' || categoria.length === 0  ? tamano : 404 }
            onChange={handleChange}
            color='primary'
            sx={{
              '& .MuiInputBase-root': {
                backgroundColor: '#f3f39f'
              },
              '& .MuiInputLabel-root': {
                color: '#000000'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#000000'
              },
            }}
            />
          <TextField
            className='add-input'
            name='rinde'
            label="Rinde"
            type='number'
            value={rinde ? rinde : ""}
            helperText={rinde.length > 0 ? "" : "Indique cuanto rinde su producto"}
            onChange={handleChange}
            required
            color='primary'
            sx={{
              '& .MuiInputBase-root': {
                backgroundColor: '#f3f39f'
              },
              '& .MuiInputLabel-root': {
                color: '#000000'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#000000'
              },
            }}
            />
                
          <TextField
            className='add-input-desc'
            name='descripcion'
            label="Descripcion"
            value={descripcion ? descripcion : ""}
            helperText={descripcion.length > 0 ? "" : "Agregue una descripción"}
            onChange={handleChange}
            multiline
            maxRows={4}
            minRows={1}
            required
            color='primary'
            sx={{
              '& .MuiInputBase-root': {
                  backgroundColor: '#f3f39f'
              },
              '& .MuiInputLabel-root': {
                  color: '#000000'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#000000'
              },
            }}
            />
   <div className="desc-img-container">
        <fieldset className='add-img-input'>
          <ul>
            <li><p>Máximo 2 imagenes</p></li>
            <li><p>Tamaño máximo por imagen: 10mb</p></li>
          </ul>
          <legend>Seleccionar imagenes</legend>
        <input type="file" name="imagenes"  placeholder='Imágenes' multiple onChange={handleImageChange} className='add-searchImages-input' />
        </fieldset>
        
        <div className={imgsPreview.length != 0 && imgsPreview.length <= 2? "add-imgs-container" : "no-imgs-container"}>    
        {
          imgsPreview.length === 0 
            ? <h2 className='add-img-input-length'>Imagenes a cargar</h2>
            : imgsPreview.length > 2 
            ? <h1 className='add-img-input-length-error'>Ha excedido el límite de imagenes a subir: 2</h1>
            : null
        }
          {imgsPreview.length > 0 && imgsPreview.length <=2 &&(
            <div className='preview-container'>
            {imgsPreview.map((img)=>(
              <img src={img} alt="" key={img} className='add-img' />
            ))}
            </div>
          )}
          </div>
          </div>
          <div className={imgsPreview.length === 0 || imgsPreview.length > 2 ? "disabled": "btns-container"}>
  
          <Link to="/">
          <Button variant="contained" color="error" className='error-btn' >
            Cancelar
          </Button>
          </Link>
          <Button variant="contained" color="primary" type='submit' className='submit-btn'  >
            Crear producto
          </Button>
          </div>
        </form>
      </div>
    )
}

export default Add
