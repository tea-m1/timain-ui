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
import {SubmitHandler, useForm} from "react-hook-form";
import {Input} from "../../components/ui/input";
import {Button} from "../../components/ui/button";
import {z} from "zod";
import {useState} from "react";
import {RegisterSchema} from "./register-shema.ts";
import {useMutation} from "@tanstack/react-query";
import {accountProvider} from "@/features/admin/providers/accountProvider.ts";
import {v4 as uuid} from "uuid";
import {CreateUser, CreateUserGenderEnum, UserRole} from "@/gen/api.ts";
import axios from "axios";
import {unwrap} from "@/features/admin/providers/api.ts";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
      username: "",
      phone: "",
      gender: "Male",
    },
  });

  const {mutateAsync: saveUser} = useMutation({
    mutationKey: ["create-account"],
    mutationFn: (user: CreateUser) => accountProvider.save(user),
  });

  const onSubmit: SubmitHandler<z.infer<typeof RegisterSchema>> = async (
    data
  ) => {
    setLoading(true);
    try {
      const {confirmPassword, ...user} = data;

      // await saveUser({
      //   id: uuid(),
      //   ...user,
      //   gender: user.gender as CreateUserGenderEnum,
      //   registrationDate: new Date(),
      // });

      await unwrap(() =>
        axios.post(`${process.env.API_BASE_URL}/auth/signup`, {
          id: uuid(),
          ...user,
          role: UserRole.USER,
          gender: user.gender.toUpperCase() as CreateUserGenderEnum,
          registrationDate: new Date(),
          birthPlace: "place",
          birthDate: new Date(),
        })
      );

      setLoading(false);
      console.log("User registered successfully");
    } catch (error) {
      setLoading(false);
      console.error("Failed to register user:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <CardWrapper
        label="Create an account"
        title="Register"
        backButtonHref="/login"
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
                      <Input
                        {...field}
                        type="email"
                        placeholder="jo@gmail.com"
                      />
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
                    <FormLabel>Téléphone</FormLabel>
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
                    <FormLabel>Adresse</FormLabel>
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
                    <FormLabel>Genre</FormLabel>
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
    </div>
  );
};

export default RegisterForm;
