import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import * as actions from "../redux/actions/index.js";
import { Redirect, Link } from 'react-router-dom'
import wallper from '../assets/walper.jpg'

function Form() {
  var _id;
  const dispatch = useDispatch();
  var msg = useSelector((state) => state.DataUser);
  const [input, setInput] = useState({ email: "", password: "" })
  if (msg.length >0) {
    _id=  msg[0]._id
  }

  useEffect(
    () => {
      console.log(msg);
  
      if ( msg[0] === 'U') {
        alert('correo o cantraseña incorecta')
        }
     
    }, [msg]
  )
  const InputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value

    })


  }
  return (
  <div className="hero min-h-screen" style={{ backgroundImage: `url("${wallper}")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  {msg[0] !== 'U' ? "" : <Redirect to="/login" />}
      {_id? <Redirect to="/home" /> : ""} 
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">El siguiente es un OVA (objeto virtual de aprendizaje) que les ayudará a aprender inglés con alguno recursos, actividades y evaluaciones</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
	  <form onSubmit={(e) => {
       e.preventDefault()
       dispatch(actions.login(input))
       }}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' onChange={InputChange} value={input.email} placeholder="email" className="input input-bordered" />
			</div>
			<div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' onChange={InputChange} value={input.password} placeholder="password" className="input input-bordered" />
			</div>
			<div className="form-control mt-6">
		  <input type="submit" value="Login" className="btn btn-primary" />
        </div>
		</form>
		<br />
      <p><Link className="link link-primary" to="/registro">Registrarse</Link></p>
      </div>
    </div>
  </div>
</div>
)
}

export default Form;