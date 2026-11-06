import { z } from "zod";

export const waitlistSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(120),
  email: z.string().trim().toLowerCase().pipe(z.email("Enter a valid email address.").max(254)),
  website: z.string().max(0).optional(),
}).strict();

export type WaitlistEntry = z.infer<typeof waitlistSchema>;
