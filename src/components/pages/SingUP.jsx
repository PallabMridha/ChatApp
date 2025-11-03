import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";



const SingUP = () => {
 const navigate = useNavigate();
  const auth = getAuth();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Name

  const handleNameInput = (e) => {
    setUserInfo((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  // Name
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
  // Password

  const hendleSignupSubmit = (e) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      toast.error("Crediantial Is Missing");
    } else {
      createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
          // Signed up
          sendEmailVerification(auth.currentUser).then(() => {
            navigate("/loging");
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: userInfo.name,
              photoURL: "/userPhoto.png",
            });
            toast.success("Data Send");
            console.log(user);
          });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //  toast.error(errorCode)
          if (errorCode == "auth/email-already-in-use") {
            toast.error("Email Is Duplicate");
          }

          // ===============
        });
    }
  };

  // console.log(userInfo);

  return (
   <>
    <>
      <Toaster />
      <div className="w-full">
        <Card className="w-[400px] mx-auto mt-[100px]">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardAction>
              <Link to={"/loging"}>
                <Button variant="link">Login</Button>
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form onSubmit={hendleSignupSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    placeholder="Name"
                    onChange={handleNameInput}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    placeholder="m@example.com"
                    onChange={handleEmailInput}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    onChange={hanldePasswordInput}
                  />
                </div>
              </div>
              <CardFooter className="flex-col gap-2 mt-3">
                <Button type="submit" className="w-full">
                  Signup
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

export default SingUP
