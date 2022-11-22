import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import * as actions from "../redux/actions/index.js";
import { Redirect, Link } from 'react-router-dom'
import './form.css'

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
    <div className="card" id="container">
       {msg[0] !== 'U' ? "" : <Redirect to="/login" />}
      {_id? <Redirect to="/home" /> : ""} 
      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(actions.login(input))
      }}>
        <div className="mb-3">
          <label htmlFor="1" className="form-label">Email</label>
          <input type="email" id="1" name='email' onChange={InputChange} value={input.email} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="2" className="form-label">Password</label>
          <input type="password" id="2" name='password' onChange={InputChange} value={input.password} className="form-control" />
        </div>
        <input type="submit" value="enviar" className="btn btn-primary" />
      </form>
      <br />
      <p><Link to="/registro">Registrarse</Link></p>
    </div>
  );
}

export default Form;