import axios from "axios";
export const ENV_DATA = "ENV_DATA";
export const USER_DATA = "USER_DATA";
export const REGISTRO = "REGISTRO";
export const SALIR = "SALIR";
export const TEMA = "TEMA";

export function chageTema(data) {
  return { type: TEMA, payload:data }
}
//const api='http://localhost:3001'
export function login(data) {
    return (dispatch) => {
      axios.post('/login', data)
        .then(function (response) {
          dispatch({ type: ENV_DATA, payload:[ response.data]})
       
        })
        .catch(function (error) {
          dispatch({ type: ENV_DATA, payload: error.response.data })
        });
  
    }
  }

  export function register(data) {
    return (dispatch) => {
      axios.post('/usuario', data)
        .then(function (response) {
          dispatch({ type: REGISTRO, payload: response.data})
       
        })
        .catch(function (error) {
          dispatch({ type: REGISTRO, payload: error.response.data })
        });
  
    }
  }

  export function salir () {
   
    return (dispatch) => {
      axios.get('/salir')
        .then(function (response) {
          dispatch({ type: SALIR, payload: response.data})
        })
        .catch(function (error) {
          dispatch({ type: SALIR, payload: error.response.data })
        });

    }
  
  }

  export function getDataUser () {
   
    return (dispatch) => {
      axios.get('/data-user')
        .then(function (response) {
          dispatch({ type: USER_DATA, payload: response.data})
        })
        .catch(function (error) {
          dispatch({ type: USER_DATA, payload: error.response.data })
        });

    }
  
  }

  export function limpiar() {
    return window.location.reload()
  }