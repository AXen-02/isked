import { z } from "zod";
import { Payload } from "./payloads";

export const UpdateProfileValidator = z.object({
  payloadName: z.nativeEnum(Payload),
  id: z.string(),
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  bio: z
    .string()
    .min(4, {
      message: "Bio must be at least 4 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 160 characters.",
    }),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
});

export const UpdateAccountValidator = z.object({
  payloadName: z.nativeEnum(Payload),
  id: z.string(),
  username: z
    .string()
    .min(3, {
      message: "Userame must be at least 3 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    })
    .regex(/^[a-zA-Z0-9_-]+$/, {
      message:
        "Username can only contain letters, numbers, underscores, and hyphens.",
    }),
  email: z.string().email().optional(),
});

export const DeleteAccountValidator = z.object({
  id: z.string(),
});

export type CreateProfilePayload = z.infer<typeof UpdateProfileValidator>;
export type CreateAccountPayload = z.infer<typeof UpdateAccountValidator>;

export type DeleteAccountPayload = z.infer<typeof DeleteAccountValidator>;
