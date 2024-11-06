// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { zodBuffer } from "@app/lib/zod";

import { TImmutableDBKeys } from "./models";

export const UserSecretsCreditCardSchema = z.object({
  id: z.string().uuid(),
  cardholderName: z.string(),
  brand: z.string().nullable().optional(),
  iv: z.string(),
  tag: z.string(),
  secretId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  cvv: zodBuffer.nullable().optional(),
  expiryDate: zodBuffer.nullable().optional(),
  cardNumber: zodBuffer.nullable().optional()
});

export type TUserSecretsCreditCard = z.infer<typeof UserSecretsCreditCardSchema>;
export type TUserSecretsCreditCardInsert = Omit<z.input<typeof UserSecretsCreditCardSchema>, TImmutableDBKeys>;
export type TUserSecretsCreditCardUpdate = Partial<Omit<z.input<typeof UserSecretsCreditCardSchema>, TImmutableDBKeys>>;