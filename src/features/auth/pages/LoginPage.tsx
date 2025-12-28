"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { useLoginForm } from "../hooks/useLoginForm";
import { Field, FieldError, FieldGroup, FieldLabel } from "~/components/ui/field";
import { Controller } from "react-hook-form";
import { Input } from "~/components/ui/input";
import Link from "next/link";

const LoginPage = () => {
  const { form, onSubmit } = useLoginForm();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>
            Enter your email and password to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="name@example.com"
                      type="email"
                    />
                    {fieldState.invalid && <FieldError>{fieldState.error?.message}</FieldError>}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      type="password"
                    />
                    {fieldState.invalid && <FieldError>{fieldState.error?.message}</FieldError>}
                  </Field>
                )}
              />
            </FieldGroup>
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground text-center w-full">
            Don&apos;t have an account?{" "}
            <Link className="text-primary underline" href="/register">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

{
  /* <Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <input type="email" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="password"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <input type="password" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
  <Button>Sign In</Button>
</form>
</Form> */
}
export default LoginPage;
