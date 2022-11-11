
import { ADD_USER,GET_USER } from '../actions/types'


const userReducer = (state= {users:[]} ,{type,payload} )=>{
    switch(type){
    case ADD_USER:
        return {...state,users:[...state.users,payload]}
    case GET_USER:
        return {...state,users:payload}
    default:
        return state;
}}
export default userReducer