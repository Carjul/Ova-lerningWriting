import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import img from '../assets/img.jpg'
import { limpiar } from '../redux/actions'
import './init.css'

export default function Init() {
    const data = useSelector((state)=>state.resapimsg)

    useEffect(()=>{
        if(data ==="exit"){
           limpiar()
        } 
    },[data])
    return (
        <div id='img'  >
          <img src={img} alt="" />
          
           <Link to='/login'><button type="button" className="btn btn-success btn-lg">Inicio</button> </Link>
            
        </div>
    )
    
}