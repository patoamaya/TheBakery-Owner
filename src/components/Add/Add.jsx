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
            <MenuItem value = 'tortaClasica'>Torta clasica</MenuItem>  {/* ex torta */}
            <MenuItem value = 'tortaPersonalizada'>Torta personalizada</MenuItem>  {/* ex cumpleanos */}
            <MenuItem value = 'variada'>Pasteleria variada </MenuItem> {/* ex budin y proximo a tener alfajorcitos, etc */}
            <MenuItem value = 'box'>Box</MenuItem>
            <MenuItem value = 'miniPasteleria'>Mini pasteleria</MenuItem>
            <MenuItem value = 'fechaEspecial'>Fechas especiales</MenuItem>  {/* ex fechas patrias- diapadre, diamadre, pascua, navidad, sanvalentin */}
            <MenuItem value = 'cateringSalado'>Catering salado</MenuItem> {/* ex salado */}
            <MenuItem value = 'cateringDulce'>Catering dulce</MenuItem> {/* nueva*/}
          </Select>
        </FormControl>
          <TextField
            className='add-input'
            name='tamano'
            label="Tamaño"
            helperText={tamano && tamano.length > 0 ? "" : "Agregue el tamaño"}
            value={categoria === 'tortaClasica' || categoria === 'variada' || categoria === 'tortaPersonalizada' || categoria === 'box' || categoria.length === 0  ? tamano : 404 }
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
            <li><p>Máximo 5 imagenes</p></li>
            <li><p>Tamaño máximo por imagen: 10mb</p></li>
          </ul>
          <legend>Seleccionar imagenes</legend>
        <input type="file" name="imagenes"  placeholder='Imágenes' multiple onChange={handleImageChange} className='add-searchImages-input' />
        </fieldset>
        
        <div className={imgsPreview.length != 0 && imgsPreview.length <= 5? "add-imgs-container" : "no-imgs-container"}>    
        {
          imgsPreview.length === 0 
            ? <h2 className='add-img-input-length'>Imagenes a cargar</h2>
            : imgsPreview.length > 5 
            ? <h1 className='add-img-input-length-error'>Ha excedido el límite de imagenes a subir: 5</h1>
            : null
        }
          {imgsPreview.length > 0 && imgsPreview.length <=5 &&(
            <div className='preview-container'>
            {imgsPreview.map((img)=>(
              <img src={img} alt="" key={img} className='add-img' />
            ))}
            </div>
          )}
          </div>
          </div>
          <div className={imgsPreview.length === 0 || imgsPreview.length > 5 ? "disabled": "btns-container"}>
  
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
