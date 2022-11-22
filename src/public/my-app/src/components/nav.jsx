import { Link} from 'react-router-dom'
import Exit from './cerrar'
import icon from '../assets/leyendo.png' 
import './nav.css'

export default function Nav() {
  
  
  return (
    <nav className="navbar navbar-dark bg-dark ">
      <ul className="nav nav-pills">
        <li className="nav-item" >
          <Link className="nav-link text-light" to="/"><img src={icon} alt="img here" className='img' /></Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-light" to="/home">home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/actividades">actividades</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/evaluacion">evaluacion</Link>
        </li>
        <li className='nav-item'>
          <Link className="nav-link text-light" to="/about">about</Link>
        </li>
        <li className='nav-item'>
        <Exit  />
        </li>
      </ul>
     
    </nav>

  )
}