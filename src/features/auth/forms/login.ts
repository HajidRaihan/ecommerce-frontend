import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email({ message: "invalid email address" }),
  password: z.string().min(8, { message: "password must be at least 8 characters" }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
