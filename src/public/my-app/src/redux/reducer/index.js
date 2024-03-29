import {ENV_DATA,REGISTRO,SALIR,USER_DATA,TEMA} from '../actions'

const initialState = {
  DataUser:[],
  resapimsg:{},
  tema:'light'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
   case ENV_DATA: return {...state, DataUser:[...state.DataUser=action.payload]}
   case REGISTRO: return {...state,resapimsg:state.resapimsg=action.payload}
   case SALIR: return {...state,resapimsg:state.resapimsg=action.payload}
   case USER_DATA: return {...state, DataUser:[...state.DataUser=action.payload]}
   case TEMA: return {...state, tema:state.tema=action.payload}
   default: return state;
  }

};
export default rootReducer;