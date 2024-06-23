import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

const Login = ({setLoginn}) => {
  return (
    <div>
       <button className='btn-close' onClick={()=>setLoginn(false)}><IoCloseCircleOutline /></button>
            <h1>Введите номер телефона</h1>
            <p>Отправим смс с кодом подтверждения</p>
    </div>
  )
}
  
export default Login