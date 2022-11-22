import express from 'express'
import morgan  from 'morgan'
import dotenv from 'dotenv'
import passport from 'passport'
import session from 'express-session'
import path from 'path'
import { fileURLToPath } from 'url';
import routeUser from './routes/usuario.js'
import routeNotas from './routes/notas.js'
import routerLogin from './routes/login.js'
import cors from 'cors'
import './config/passport.js'

dotenv.config()
const {PORT} = process.env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = express()
server.set('port', PORT)

server.use(morgan('dev'))
server.use(session({secret: "secret",resave: true,saveUninitialized: true,}));
server.use(passport.initialize());
server.use(passport.session());
server.use(express.static(__dirname+'/public/my-app/build'))
server.use(express.urlencoded({extended:false}))
server.use(cors())
server.use(express.json())


server.use('/',routeUser)
server.use('/',routeNotas)
server.use('/',routerLogin)

server.get('*',(req,res)=>{res.sendFile(__dirname+'/public/my-app/build/index.html')})

export default server;

