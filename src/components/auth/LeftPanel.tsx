"use client";

import AuthTabs from "./AuthTabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/src/lib/validation";

type FormFields = {
  fullName: string;
  email: string;
  password: string;
};

export default function LeftPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(SignUpSchema),
  });

const onSubmit: SubmitHandler<FormFields> = async (data) => {
  await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log(data);
};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-screen bg-white flex justify-center">
        <div className="w-full max-w-md pt-16">

          {/* Header */}
          <header className="space-y-5">
            <AuthTabs />

            <div className="space-y-2 text-center">
              <h1 className="text-5xl font-bold tracking-tight">
                Sign in to your account
              </h1>

              <p className="text-gray-500 text-lg">
                Sign up here
              </p>
            </div>
          </header>

          {/* Form */}
          <main className="mt-10 space-y-6">

            <div className="space-y-2">
              <p className="font-medium">Full Name</p>

              <Input
                {...register("fullName")}
                placeholder="Enter your full name"
                className="h-12"
              />

              {errors.fullName && (
                <p className="text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <p className="font-medium">Email</p>

              <Input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="h-12"
              />

              {errors.email && (
                <p className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <p className="font-medium">Password</p>

              <Input
                {...register("password")}
                type="password"
                placeholder="Enter your password"
                className="h-12"
              />

              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full h-12 rounded-xl">
              Sign Up Now
            </Button>

          </main>
        </div>
      </div>
    </form>
  );
}