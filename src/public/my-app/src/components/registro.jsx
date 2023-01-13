import {useState,useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import {Redirect,Link} from 'react-router-dom'
import * as actions from "../redux/actions/index.js";
import wallper from '../assets/walper.jpg'

function LoginUp() {

    const dispatch = useDispatch();
    var msg= useSelector((state) => state.resapimsg);
    const [input, setInput] = useState({name:"", email: "", password: ""})
    useEffect(
        ()=> {
         console.log(msg);
         
        },[msg]
    )
    const InputChange = function (e) {
        console.log(input);
        setInput({
            ...input,
            [e.target.name]: e.target.value
            
        })
     
     
    }
  return (
  
  <div className="hero min-h-screen" style={{ backgroundImage: `url("${wallper}")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  {msg.msg ==='usuario guardado'?<Redirect to="/login" />:""}
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
	  <form onSubmit={(e) => {
       e.preventDefault()
       dispatch(actions.register(input))
       }}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nombre</span>
          </label>
		  <input type="text"  name="name" onChange={InputChange} value={input.name} placeholder="name" className="input input-bordered"/>
			</div>
			<div className="form-control">
          <label className="label">
            <span className="label-text">Correo</span>
          </label>
          <input type="email" name="email" onChange={InputChange} value={input.email} placeholder="email" className="input input-bordered" />
			</div>
			<div className="form-control">
          <label className="label">
            <span className="label-text">Contraseña</span>
          </label>
          <input type="password"   name="password" onChange={InputChange} value={input.password}  className="input input-bordered" />
			</div>
			<div className="form-control">
          <label className="label">
            <span className="label-text">Repetir contraseña</span>
          </label>
          <input type="password" className="input input-bordered" />
			</div>
			<div className="form-control mt-6">
		  <input type="submit" value="Registrase" className="btn btn-primary" />
        </div>
		</form>
		<br />
      <p><Link className="link link-primary" to="/login">Iniciar Sección</Link></p>
      </div>
    </div>
  </div>
</div>
    
  );
}

export default LoginUp;