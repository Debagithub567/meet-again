import {z} from "zod";
export const SignUpSchema = z.object({
    fullName:z.string().min(2,"Full name is required"),
    email:z.email("Invalid email address"),
    password:z.string().min(8,"Password must be at least 8 characters"),
});