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
                <li><Link to="/category/torta" className='sidebar-link'>Tortas</Link></li>
                <li><Link to="/category/budin" className='sidebar-link'>Budines</Link></li>
                <li><Link to="/category/box" className='sidebar-link'>Box</Link> </li>
            </ul>
            <p className='sidebar-title'>Especiales</p>
            <ul className="sidebar-ul2">
                <li><Link to="/category/miniPasteleria" className='sidebar-link'>Mini pasteleria</Link> </li>
                <li><Link to="/category/navidad" className='sidebar-link'>Navidad</Link> </li>
                <li><Link to="/category/sanValentin" className='sidebar-link'>San Valentin</Link> </li>
                <li><Link to="/category/pascua" className='sidebar-link'>Pascua</Link> </li>
                <li><Link to="/category/diaPadre" className='sidebar-link'>Dia del padre</Link> </li>
                <li><Link to="/category/diaMadre" className='sidebar-link'>Dia de la madre</Link> </li>
                <li><Link to="/category/fechasPatrias" className='sidebar-link'>Fechas patrias</Link> </li>
                <li><Link to="/category/cumpleanos" className='sidebar-link'>Cumpleaños</Link> </li>
                <li><Link to="/category/catering" className='sidebar-link'>Catering</Link> </li>
                <li><Link to="/category/salado" className='sidebar-link'>Salados</Link> </li>

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
                    <MenuItem ><Link to="/category/torta" className='sidebar-link'>Tortas</Link></MenuItem>
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
                    <MenuItem ><Link to="/category/miniPasteleria" className='sidebar-link'>Mini pasteleria</Link></MenuItem>
                    <MenuItem ><Link to="/category/navidad" className='sidebar-link'>Navidad</Link></MenuItem>
                    <MenuItem ><Link to="/category/sanValentin" className='sidebar-link'>San Valentin</Link></MenuItem>
                    <MenuItem ><Link to="/category/pascua" className='sidebar-link'>Pascua</Link></MenuItem>
                    <MenuItem ><Link to="/category/diaPadre" className='sidebar-link'>Dia del padre</Link></MenuItem>
                    <MenuItem ><Link to="/category/diaMadre" className='sidebar-link'>Dia de la madre</Link></MenuItem>
                    <MenuItem ><Link to="/category/fechasPatrias" className='sidebar-link'>Fechas patrias</Link></MenuItem>
                    <MenuItem ><Link to="/category/cumpleanos" className='sidebar-link'>Cumpleaños</Link></MenuItem>
                    <MenuItem ><Link to="/category/catering" className='sidebar-link'>Catering</Link></MenuItem>
                    <MenuItem ><Link to="/category/salado" className='sidebar-link'>Salados</Link></MenuItem>
                    
                </Select>
            </FormControl>
                    </div>
 
            </div>
            <Outlet/>
        </div>
    )
}

export default Sidebar
