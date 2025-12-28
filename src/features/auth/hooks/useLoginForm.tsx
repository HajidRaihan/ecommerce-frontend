import { useForm } from "react-hook-form";
import { loginFormSchema, LoginFormSchema } from "../forms/login";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { BetterAuthError } from "better-auth";
import { authClient, getErrorMessage } from "~/lib/auth-client";

export const useLoginForm = () => {
  const form = useForm<LoginFormSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });
  const onSubmit = async (data: LoginFormSchema) => {
    try {
      const { error } = await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.email,
      });
      if (error?.code) {
        toast.error(getErrorMessage(error.code as string));
      }
    } catch (error) {
      // handle non-auth errors
      toast.error((error as Error).message);
    }
  };
  return { form, onSubmit };
};
