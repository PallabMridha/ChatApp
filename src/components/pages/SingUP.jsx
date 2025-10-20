import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import toast, { Toaster } from 'react-hot-toast';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom'


const SingUP = () => {

  const [userinfo, setuserinfo] = useState({
        name :"",
        emil :"",
        password :"",      
  })
  // inputname start
  const handelinpunametbtn = (e)=>{
    setuserinfo((prev) =>{
       return{...prev, name: e.target.value};
    })
  }
  // inputname end

  // inputEmail start
  const handelEmailInputbtn = (e)=>{
    setuserinfo((prev) =>{
       return{...prev, email: e.target.value};
    })
  }
  // inputEmail end

  // inputPass start
  const handelpassinputbtn = (e)=>{
    setuserinfo((prev) =>{
       return{...prev, password: e.target.value};
    })
  }
  // inputPass end

  // singupbtn start
  const handelsingupbtn = (e)=>{
    e.preventDefault()
    if (!userinfo.name || !userinfo.email || !userinfo.password) {
      toast.error("Crediantial Is Massing")
    }
    else{
      const auth = getAuth();
createUserWithEmailAndPassword(auth, userinfo.email, userinfo.password)
  .then((userCredential) => {
    toast.success("Data Sent")
    const user = userCredential.user;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage)
  });
    }
  }
  // singupbtn end
  

  return (
    <>
    <Toaster />
   <div className={`w-full pt-5`}>
         <Card className="w-[500px] mx-auto">
         <CardHeader>
           <CardTitle>Sing  Up to your account</CardTitle>
           <CardDescription>
             Enter your email below to login to your account
           </CardDescription>
           <CardAction>
             <Link to={"/loging"}>
             <Button variant="link">Loging</Button>
             </Link>
           </CardAction>
         </CardHeader>
         <CardContent>
           <form onSubmit={handelsingupbtn}>
             <div className="flex flex-col gap-6">
               <div className="grid gap-2">
                 <Label htmlFor="text">Your name</Label>
                 <Input
                  
                   type="text"
                   placeholder="type your name"
                   onChange={handelinpunametbtn}
                 />
               </div>
               <div className="grid gap-2">
                 <Label htmlFor="email">Email</Label>
                 <Input
                   id="email"
                   type="email"
                   placeholder="type your email"
                   onChange={handelEmailInputbtn}
                 />
               </div>
               <div className="grid gap-2">
                 <div className="flex items-center">
                   <Label htmlFor="password">Password</Label>
                   <a
                     href="#"
                     className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                   >
                     Forgot your password?
                   </a>
                 </div>
                 <Input id="password" type="password" onChange={handelpassinputbtn} />
               </div>
             </div>
             <CardFooter className="flex-col gap-2 pt-5">
           <Button type="submit" className="w-full">
             Sing UP
           </Button>
        
         </CardFooter>
           </form>
         </CardContent>
         
       </Card>
       </div>
    </>
  )
}

export default SingUP
