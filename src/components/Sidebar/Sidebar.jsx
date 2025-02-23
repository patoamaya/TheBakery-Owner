import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Sidebar.css'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'


const Sidebar = () => {
    return (
        <div className='sidebar-container-all'>
            <div className="sidebar-container">
            <Link to="/add"><Button variant='contained' color='secondary'>Nuevo</Button></Link>
            <p className='sidebar-title'>Habituales</p>
            <ul className='sidebar-ul1'>
                <li><Link to="/" className='sidebar-link'>Todo</Link></li>
                <li><Link to="/category/tortaClasica" className='sidebar-link'>Tortas clasicas</Link></li>
                <li><Link to="/category/variada" className='sidebar-link'>Pasteleria variada</Link></li>
                <li><Link to="/category/box" className='sidebar-link'>Box</Link> </li>
            </ul>
            <p className='sidebar-title'>Especiales</p>
            <ul className="sidebar-ul2">
                <li><Link to="/category/tortaPersonalizada" className='sidebar-link'>Tortas personalizadas</Link> </li>
                <li><Link to="/category/miniPasteleria" className='sidebar-link'>Mini pasteleria</Link> </li>
                <li><Link to="/category/fechaEspecial" className='sidebar-link'>Fechas especiales</Link> </li>
                <li><Link to="/category/cateringSalado" className='sidebar-link'>Catering salado</Link> </li>
                <li><Link to="/category/cateringDulce" className='sidebar-link'>Catering dulce</Link> </li>
            </ul>
            <div className="sidebar-select-mobile-container">

            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Habituales</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Habituales"
                >
                    <MenuItem><Link to="/" className='sidebar-link'>Todo</Link></MenuItem>
                    <MenuItem ><Link to="/category/tortaClasica" className='sidebar-link'>Tortas clasicas</Link></MenuItem>
                    <MenuItem ><Link to="/category/variada" className='sidebar-link'>Pasteleria variada</Link></MenuItem>
                    <MenuItem ><Link to="/category/box" className='sidebar-link'>Box</Link></MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Especiales</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Especiales"
                >
                    <MenuItem ><Link to="/category/tortaPersonalizada" className='sidebar-link'>Tortas personalizadas</Link></MenuItem>
                    <MenuItem ><Link to="/category/miniPasteleria" className='sidebar-link'>Mini pasteleria</Link></MenuItem>
                    <MenuItem ><Link to="/category/fechaEspecial" className='sidebar-link'>Fechas especiales</Link></MenuItem>
                    <MenuItem ><Link to="/category/cateringSalado" className='sidebar-link'>Catering salado</Link></MenuItem>
                    <MenuItem ><Link to="/category/cateringDulce" className='sidebar-link'>Catering dulce</Link></MenuItem>                    
                </Select>
            </FormControl>
                    </div>
 
            </div>
            <Outlet/>
        </div>
    )
}

export default Sidebar
