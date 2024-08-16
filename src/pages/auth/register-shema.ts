import * as z from "zod";

export const RegisterSchema = z
  .object({
    email: z.string().email(),
    name: z.string().min(2),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    phone: z.string().min(10).max(15),
    address: z.string().min(5),
    gender: z.enum(["Male", "Female"]),
    birthDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date",
    }),
    birthPlace: z.string().min(2),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});
