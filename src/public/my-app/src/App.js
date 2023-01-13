import Form from './components/form';
import { Route, Switch, Redirect } from 'react-router-dom'
import React, { useEffect } from 'react';
import Init from './components/init';
import LoginUp from './components/registro';
import Home from './components/home';
import Actividades from './components/actividades';
import Evaluacion from './components/evaluacion';
import About from './components/about';
import { useSelector, useDispatch } from 'react-redux';
import { getDataUser } from './redux/actions';
import Perfil from './components/perfil';


function App() {

  const user = useSelector((state) => state.DataUser)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataUser())
  }, [dispatch])
  console.log(user);
  return (
    <div >
      <Switch>
        <Route exact path="/" component={Init} />
        <Route path="/login" component={Form} />
        <Route path="/registro" component={LoginUp} />
        <Route path="/home" render={() => { return user[0] ? <Home /> : <Redirect to='/' /> }} />
        <Route path="/actividades" render={() => { return user[0] ? <Actividades /> : <Redirect to='/' /> }} />
        <Route path="/evaluacion" render={() => { return user[0] ? <Evaluacion /> : <Redirect to='/' /> }} />
        <Route path="/perfil" render={() => { return user[0] ? <Perfil/> : <Redirect to='/' /> }} />
        <Route path="/about" render={() => { return user[0] ? <About /> : <Redirect to='/' /> }} />
      </Switch>

    </div>
  );
}

export default App;
