// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { zodBuffer } from "@app/lib/zod";

import { TImmutableDBKeys } from "./models";

export const UserSecretsWebLoginSchema = z.object({
  id: z.string().uuid(),
  username: z.string().nullable().optional(),
  website: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
  iv: z.string().nullable().optional(),
  tag: z.string().nullable().optional(),
  secretId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  password: zodBuffer.nullable().optional()
});

export type TUserSecretsWebLogin = z.infer<typeof UserSecretsWebLoginSchema>;
export type TUserSecretsWebLoginInsert = Omit<z.input<typeof UserSecretsWebLoginSchema>, TImmutableDBKeys>;
export type TUserSecretsWebLoginUpdate = Partial<Omit<z.input<typeof UserSecretsWebLoginSchema>, TImmutableDBKeys>>;