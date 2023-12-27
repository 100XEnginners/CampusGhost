import z from "zod";

export const signupSchema = z.object({
  email: z
    .string()
    .email("This is not a valid email.")
    .min(3, "Email must be at least 3 characters long.")
    .max(254, "Email must be no longer than 254 characters."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .max(254, "Password must be no longer than 254 characters."),
});

export const emailUpdateSchema = z.object({
  newEmail: z
    .string()
    .email()
    .min(3, "Email must be at least 3 characters long.")
    .max(254, "Email must be no longer than 254 characters long."),
});

export const passwordUpdateSchema = z.object({
  currentPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .max(254, "Password must be no longer than 254 characters."),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 character long.")
    .max(254, "Password must be no longer than 254 characters."),
});
