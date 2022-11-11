import { ADD_USER,GET_USER } from "./types";
import {useDipatch} from 'react-redux'
import axios from 'axios'


export const adduser = (newuser)=>(dispatch)=>{
    axios.post("http://localhost:5000/adduser")
    .then(({data})=>dispatch({
        type:ADD_USER,
        payload:data,
    }))
    .catch((err)=>alert("ERROR IN ADD NEW USER"))
}
export const getuser = ()=>(dispatch)=>{
    axios.get("http://localhost:5000/users")
    .then(({data})=>dispatch({
        type:GET_USER,
        payload:data,
    })
    .catch((err)=>{alert("ERROR IN GET USERS")})
    )
}