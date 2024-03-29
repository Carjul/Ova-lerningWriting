import { Redirect,Link } from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import { salir} from "../redux/actions"
import {chageTema} from '../redux/actions'
import {MdLogout} from "react-icons/md";
import { VscSymbolColor } from "react-icons/vsc";

export default function Nav(params) {
  let { props } = params;
  const msg = useSelector((state)=>state.resapimsg)
  const user= useSelector((state)=>state.DataUser)
  const tema = useSelector((state) => state.tema)
  document.getElementById('root').setAttribute('data-theme', tema);
  const dispatch = useDispatch();
  const handlechange=(e)=>{
    dispatch(chageTema(e.target.value))
  }
  const temas = ["cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "valentine", "halloween", "garden", "forest", "aqua", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter","dark"]
  return (
<div className="navbar bg-base-200">
  <div className="flex-1 flex-row flex-wrap">
		  <Link className="btn btn-outline btn-primary border-none normal-case text-xl" to="/">Ova Ingles</Link>
          {props===1?<Link className="btn btn-ghost bg-primary normal-case text-xl" to="/home">Home</Link>:<Link className="btn btn-ghost normal-case text-xl" to="/home">Home</Link>}
          {props===2?<Link className="btn btn-ghost bg-primary normal-case text-xl" to="/actividades">Actividades</Link>:<Link className="btn btn-ghost normal-case text-xl" to="/actividades">Actividades</Link>}
		  {props===3?<Link className="btn btn-ghost bg-primary normal-case text-xl" to="/evaluacion">Evaluacion</Link>:<Link className="btn btn-ghost normal-case text-xl" to="/evaluacion">Evaluacion</Link>}
		  {props===4?<Link className="btn btn-ghost bg-primary normal-case text-xl" to="/about">About Us</Link>:<Link className="btn btn-ghost normal-case text-xl" to="/about">About Us</Link>}
  </div>
  <div className="gap-2">
  <VscSymbolColor />
    <select name="tema" id="tema" onChange={handlechange} className="select select-primary w-5px max-w-xs border-none">
          <option defaultValue={"Themes"}> Themes</option>
          {temas?.map(i =>
             <option key={i} value={i}>{i}</option>
          )}
       </select>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user[0]?.avatar} alt="img"/>
        </div>
      </label>
	  {msg === 'exit' ? <Redirect to="/" />:""  }
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li><Link  className="justify-between" to={'#'} onClick={()=>{dispatch(salir())}}>Salir <span><MdLogout/></span></Link></li>
      </ul>
    </div>
  </div>
</div>
  )
}