"use client";

import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {LoginSchema} from "./login-schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Input} from "../../components/ui/input";
import {Button} from "../../components/ui/button";
import {z} from "zod";
import {authProvider} from "@/features/admin/providers/authProvider";
import {useMutation, useQuery} from "@tanstack/react-query";
import {UserLogin} from "@/gen";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {mutateAsync: loginUser, isPending} = useMutation({
    mutationKey: ["login"],
    mutationFn: (u: UserLogin) => authProvider.login(u),
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    try {
      await loginUser(data);
      navigate("/");
    } catch (e) {}
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#215048] via-[#557D56] to-[#8FB673]">
      <CardWrapper
        label="Login to your account"
        title="Login"
        backButtonHref="/register"
        backButtonLabel="Don't have an account? Register here."
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
            </div>
            <Button isLoading={isPending} type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};

export default LoginForm;
