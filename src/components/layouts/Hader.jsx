import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image'
import logo from '/src/assets/chatapp logo.png'

const Hader = () => {
  return (
    <div>
     <div className="bg-blue-500 ">
      <div className="max-w-[1170px] m-auto">
        
          
       
        
          <ul className={`flex justify-center gap-x-32 text-[16px] capitalize text-white `}>
            <Image className={`w-[30px]`} src={logo}/>
            <Link to={"/"}>
            <li>home</li>
            </Link>
            <Link to={"/loging"}>
            <li>Loging</li>
            </Link>
            <Link to={"/singup"}>
            <li>SingUp</li>
            </Link>
            <Link to={"/dasebord"}>
            <li>Desebord</li>
            </Link>
           
          </ul>
       
      </div>
    </div> 
    </div>
  )
}

export default Hader
