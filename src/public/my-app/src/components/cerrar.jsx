 
import { useSelector,useDispatch } from "react-redux"
import { Redirect,Link } from "react-router-dom"
import { salir} from "../redux/actions"
import icon from '../assets/salida.png'
import './cerrar.css'

export default function Exit() {
 const dispatch= useDispatch()
const msg = useSelector((state)=>state.resapimsg)
const user= useSelector((state)=>state.DataUser)


    return(
        <div id="vista" >
            {msg === 'exit' ? <Redirect to="/" />:""  }
           <Link to="/perfil"><img src={user[0]?.avatar} alt="avatar here" id='avatar' /> </Link>
            <img src={icon} alt="icon" id='icon' onClick={()=>{dispatch(salir())}}/>
        </div>
        
    )
}