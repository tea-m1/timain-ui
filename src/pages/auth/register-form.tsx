"use client";

import CardWrapper from "./card-wrapper.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Input} from "../../components/ui/input";
import {Button} from "../../components/ui/button";
import {z} from "zod";
import {useState} from "react";
import {RegisterSchema} from "./register-shema.ts";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      gender: "Male",
      birthDate: "",
      birthPlace: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    setLoading(true);
    try {
      await submitUserData(data);
      setLoading(false);
      console.log("User registered successfully");
    } catch (error) {
      setLoading(false);
      console.error("Failed to register user:", error);
    }
  };

  async function submitUserData(userData: z.infer<typeof RegisterSchema>) {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const newUser = await response.json();
    return newUser;
  }

  return (
    <CardWrapper
      label="Create an account"
      title="Register"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account? Login here."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="jo@gmail.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Jo" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({field}) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} type="tel" placeholder="+1234567890" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="123 Main St" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <select {...field} className="input">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthDate"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Birth Date</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthPlace"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Birth Place</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="City, Country" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            {loading ? "Loading..." : "Register"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
