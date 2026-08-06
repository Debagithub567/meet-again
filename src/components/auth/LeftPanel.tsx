"use client";

import AuthTabs from "./AuthTabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {useState} from "react";
import { SignUpSchema } from "@/src/lib/validation";

export default function LeftPanel() {
  const[fullName,setFullName]=useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();

    console.log(fullName);
    console.log(email);
    console.log(password);
  }
  return (<form onSubmit={handleSubmit}>
    <div className="h-screen bg-white flex justify-center">
      <div className="w-full max-w-md pt-16">

        {/* Header */}
        <header className="space-y-5">
          <AuthTabs />

          <div className="space-y-2 text-center">
            <h1 className="text-5xl font-bold tracking-tight">
              Sign into your account
            </h1>

            <p className="text-gray-500 text-lg">
              Sign up and get 1 month free trial
            </p>
          </div>
        </header>

        {/* Form */}
        <main className="mt-10 space-y-6">

          <div className="space-y-2">
            <p className="font-medium">Full Name</p>
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <p className="font-medium">Email</p>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            
            <p className="font-medium">Password</p>
            <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="h-12"
            />
          </div>

          <Button type="submit" className="w-full h-12 rounded-xl">
            Sign Up
          </Button>

        </main>
      </div>
    </div>
   </form>
   );
}