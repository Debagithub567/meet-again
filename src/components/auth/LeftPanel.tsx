import AuthTabs from "./AuthTabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LeftPanel() {
  return (
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
              placeholder="Enter your full name"
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <p className="font-medium">Email</p>
            <Input
              placeholder="Enter your email"
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <p className="font-medium">Password</p>
            <Input
              type="password"
              placeholder="Enter your password"
              className="h-12"
            />
          </div>

          <Button className="w-full h-12 rounded-xl">
            Sign Up
          </Button>

        </main>
      </div>
    </div>
  );
}