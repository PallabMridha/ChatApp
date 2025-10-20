import React from 'react'
import { Button } from "@/components/ui/button"
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
  return (
    <>
   
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
           <form>
             <div className="flex flex-col gap-6">
               <div className="grid gap-2">
                 <Label htmlFor="email">Your name</Label>
                 <Input
                   id="email"
                   type="email"
                   placeholder="type your name"
                   required
                 />
               </div>
               <div className="grid gap-2">
                 <Label htmlFor="email">Email</Label>
                 <Input
                   id="email"
                   type="email"
                   placeholder="type your email"
                   required
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
                 <Input id="password" type="password" required />
               </div>
             </div>
           </form>
         </CardContent>
         <CardFooter className="flex-col gap-2">
           <Button type="submit" className="w-full">
             Sing UP
           </Button>
        
         </CardFooter>
       </Card>
       </div>
    </>
  )
}

export default SingUP
