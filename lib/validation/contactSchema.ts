import { z } from "zod";

export const contactFormSchema = z.object({
  first_name: z.string().min(1, "First name is required."),
  last_name: z.string().min(1, "Last name is required."),
  email: z.string().email("Email is invalid"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
  consent: z
    .boolean()
    .refine((v) => v, { message: "You must agree to the privacy policy." }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
