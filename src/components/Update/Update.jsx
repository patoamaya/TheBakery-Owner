import React from 'react'
import './Update.css'
import { InputLabel, MenuItem, Select, FormControl } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import {Link, useNavigate} from 'react-router-dom'


const Update = ({data, handleSubmit, handleImageChange, imgsPreview}) => {

  const navigate = useNavigate()
  let {nombre, setNombre,
       precio, setPrecio,
       tamano, setTamano,
       rinde, setRinde,
       categoria, setCategoria,
       descripcion, setDescripcion,
       imagenes} = data
    return (
        <div className='update-container'>
            <h2 className='update-title'>Editar producto</h2>
            <div className="update-back-btn">
          <Button variant="contained" color="secondary"  className='add-back-btn' onClick={()=>navigate(-1)}>
            Atras
          </Button>
        </div>
            <form encType='multipart/form-data' onSubmit={handleSubmit} className='update-form'>
            
        <TextField
          className='update-input'
          name='nombre'
          label="Nombre"
          value={nombre ? nombre : ""}
          helperText={nombre.length > 0 ? "" : "Agregue un nombre"}
          onChange={(e)=>setNombre(e.target.value)}
          required
          color='none'
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
        className='update-input'
        name='precio'
        label="Precio"
        value={precio ? precio : ""}
        helperText={precio?.length > 0 ? "" : "Agregue un valor"}
        onChange={(e)=>setPrecio(e.target.value)}
        required
        type='number'
        color='none'
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

    <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel id="categoria">Categoria</InputLabel>
            <Select
                className='post-input'
                id="categoria"
                name='categoria'
                value={categoria ? categoria : ""}
                label="Categoria"
                onChange={(e)=>setCategoria(e.target.value)}
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
                }}>
                <MenuItem value = 'torta'>Torta</MenuItem>
                <MenuItem value = 'budin'>Budin</MenuItem>
                <MenuItem value = 'navidad'>Navidad</MenuItem>
                <MenuItem value = 'sanValentin'>San Valentin</MenuItem>
                <MenuItem value = 'pascua'>Pascua</MenuItem>
                <MenuItem value = 'diaPadre'>Dia del padre</MenuItem>
                <MenuItem value = 'box'>Box</MenuItem>
                <MenuItem value = 'miniPasteleria'>Mini pasteleria</MenuItem>
                <MenuItem value = 'diaMadre'>Dia de la madre</MenuItem>
                <MenuItem value = 'fechasPatrias'>Fechas patrias</MenuItem>
                <MenuItem value = 'cumpleanos'>Cumpleaños</MenuItem>
                <MenuItem value = 'catering'>Catering</MenuItem>
                <MenuItem value = 'salado'>Salado</MenuItem>
            </Select>
    </FormControl>

      
       
        <TextField
          className='update-input'
          name='tamano'
          label="Tamaño"
          type='number'
          helperText={"Agregue el tamaño"}
          value={categoria === 'torta' || categoria === 'budin' || categoria === 'cumpleanos' || categoria === 'box' || categoria.length === 0  ? tamano : 404 }
          onChange={(e)=>setTamano(e.target.value)}
          color='none'
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
          className='update-input'
          name='rinde'
          label="Rinde"
          type='number'
          value={rinde ? rinde : ""}
          helperText={rinde.length > 0 ? "" : "Indique cuanto rinde su producto"}
          onChange={(e)=>setRinde(e.target.value)}
          required
          color='none'
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
            onChange={(e)=>(setDescripcion(e.target.value))}
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
    
      <div className="update-desc-img-container">
      <fieldset className='update-img-input'>
        <ul>
          <li><p>Máximo 2 imagenes</p></li>
          <li><p>Tamaño máximo por imagen: 10mb</p></li>
        </ul>
        <legend>Seleccionar imagenes</legend>
      <input type="file" name="imagenes"  placeholder='Imágenes' multiple onChange={handleImageChange} className='update-searchImages-input' />
        
      </fieldset>
      
      <div className={imgsPreview.length != 0 && imgsPreview.length <= 2? "update-imgs-container" : "no-imgs-container"}>    
      {
        imgsPreview.length === 0 && imagenes?.length > 0 
          ? imagenes?.map((imagen)=>(
              <img src={imagen.url} alt="" key={imagen.url} className='update-img' />
            ))
          : imgsPreview.length > 2 
          ? <h1 className='update-img-input-length-error'>Ha excedido el límite de imagenes a subir: 2</h1>
          : null
      }
        {imgsPreview.length > 0 && imgsPreview.length <=2 &&(
          <div className='update-preview-container'>
          {imgsPreview.map((img)=>(
            <img src={img} alt="" key={img} className='update-img' />
          ))}
          </div>
        )}
        </div>
        </div>
        <div className="btns-container">

        <Link to="/">
        <Button variant="contained" color="error" className='cancel-btn' >
          Cancelar
        </Button>
        </Link>
        {imgsPreview.length > 2 ?  <Button className='disabled-'/> : <Button variant="contained" color="primary" type='submit' className='submit-btn' >
          Actualizar producto
        </Button>}
        </div>
            </form>
        </div>
    )
}

export default Update
