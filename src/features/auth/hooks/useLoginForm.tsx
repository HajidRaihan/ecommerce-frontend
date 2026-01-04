import { useForm } from "react-hook-form";
import { loginFormSchema, LoginFormSchema } from "../forms/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { authClient, getErrorMessage } from "~/lib/auth-client";
import { LOCAL_STORAGE_BETTER_AUTH_TOKEN_KEY } from "../constants/localStorage";

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
      const { error, data: authResponseData } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });
      if (error?.code) {
        toast.error(getErrorMessage(error.code as string));
        return;
      }

      if (authResponseData?.token) {
        localStorage.setItem(LOCAL_STORAGE_BETTER_AUTH_TOKEN_KEY, authResponseData.token);
      }

      toast.success("Login successful");
    } catch (error) {
      // handle non-auth errors
      toast.error((error as Error).message);
    }
  };
  return { form, onSubmit };
};
