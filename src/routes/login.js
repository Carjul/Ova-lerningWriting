import {Router} from 'express'
import passport  from 'passport';

const routerLogin = Router()

var user=[]

routerLogin.post('/login', passport.authenticate("local"), (req,res)=>{
  try {
     user.push(req.user) 
      res.status(200).json(req.user)
  } catch (error) {
    console.log(error);
  }
});

routerLogin.get('/data-user', (req,res)=>{
  try {
      res.status(200).json(user)
  } catch (error) {
    console.log(error);
  }
});

routerLogin.get('/salir',(req,res, )=>{
    req.logout((err) =>{
        if (err) { 
          return next(err); 
          }})
    user=[]
    res.status(201).json('exit')

  });

export default routerLogin;
