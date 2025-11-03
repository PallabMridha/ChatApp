import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userloginginfo } from "@/slices/userSlice";



const Loging = () => {

  const data = useSelector(state => state.userinformation.value)
  // console.log(data);
  const dispatch = useDispatch()
  const handelcoustombtn = ()=>{
    const myData = {
      name: "Pallab Mridha" ,
      age: 16
    }
    dispatch(userloginginfo(myData))
    
  }
  


  const navigate = useNavigate();
  const auth = getAuth();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  // Email
  const handleEmailInput = (e) => {
    setUserInfo((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  // Email
  // Password
  const hanldePasswordInput = (e) => {
    setUserInfo((prev) => {
      return { ...prev, password: e.target.value };
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (userInfo.email && userInfo.password) {
      signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
          // Signed in
          updateProfile(auth.currentUser, {
            displayName: userInfo.name,
            photoURL: "userPhoto.png",
          })
            .then(() => {
              const user = userCredential.user;
              console.log(user);
              
              if (user.emailVerified) {
                navigate("/dashboard")
              }
              else{
                toast.error("Please Varify Your Email");
              }

            })
            .catch((error) => {
              
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
         toast.error("Not Send");
        });
    } else {
      return toast.error("Empty");
    }
  }
  
  return (
    <>
    <>
     <Toaster />
      <div className="w-full">
        <Card className="w-[400px] mx-auto shadow-2xl mt-[100px]">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            {/* <h1>{data}</h1> */}
            <button onClick={handelcoustombtn} className={`bg-blue-700 text-white py-3 rounded-full`}>Snad Data To Deshbord</button>
            <CardAction>
              <Link to={"/singup"}>
                <Button variant="link">Sign Up</Button>
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onChange={handleEmailInput}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="*********"
                    onChange={hanldePasswordInput}
                  />
                </div>
              </div>
              <CardFooter className="flex-col gap-2 mt-6">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
    </>
  )
}

export default Loging
