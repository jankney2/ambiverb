import {createStore} from 'redux'

const initialState= {
  user: {}
}


export const LOGIN="LOGIN"

export function login(obj) {
  return {
      type: LOGIN,
      payload: obj
  }
}


function reducer(state=initialState, action) {
  const {type, payload}= action

  switch(type){
    
    case LOGIN: 
    console.log('login from redux', payload)
    return {...state, user:payload}
    
    
    default: 
    return state;
  }
}







export default createStore(reducer)