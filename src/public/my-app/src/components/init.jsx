import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import img from '../assets/img.jpg'
import { limpiar } from '../redux/actions'


export default function Init() {
    const data = useSelector((state)=>state.resapimsg)
    useEffect(()=>{
        if(data ==="exit"){
           limpiar()
        } 
    },[data])
	document.getElementById('root').setAttribute('data-theme', 'night');
    return (
		<div className="hero min-h-screen" style={{ backgroundImage: `url("${img}")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to='/login' className="btn btn-primary">Inicio</Link>
    </div>
  </div>
</div>
    )
    
}