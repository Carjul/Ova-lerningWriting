import {useState,useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import {Redirect,Link} from 'react-router-dom'
import * as actions from "../redux/actions/index.js";
import './registro.css'

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
    <div className="card">
     {msg.msg ==='usuario guardado'?<Redirect to="/login" />:""}

     <form onSubmit={(e)=>{
        e.preventDefault()
        dispatch(actions.register(input))
        }}>
     <div className="mb-3">
     <label htmlFor="1" className="form-label">Nombre</label>
       <input type="text"  id="1" name="name" onChange={InputChange} value={input.name} className="form-control"/>
     </div>
     <div className="mb-3"> 
     <label htmlFor="2" className="form-label">Correo</label>
       <input type="email"  id="2" name="email" onChange={InputChange} value={input.email} className="form-control"/>
     </div>
     <div className="mb-3">
     <label htmlFor="3" className="form-label">Contraseña</label>
       <input type="password"  id="3" name="password" onChange={InputChange} value={input.password} className="form-control"/>
     </div>
     <div className="mb-3">
     <label htmlFor="4" className="form-label">Repetir contraseña</label>
       <input type="password"  id="4" className="form-control"/>
     </div>
     
       
      
       <input type="submit" className="btn btn-dark" value="enviar"  />
     </form>
     <br />
     <p><Link to="/login">Iniciar Sección</Link></p>
    </div>
  );
}

export default LoginUp;