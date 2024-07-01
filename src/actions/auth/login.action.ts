import { defineAction, z } from 'astro:actions';

export const loginUser = defineAction({
  accept: 'form',
  input: z.object({
    email: z.string().email(),
    password: z.string().min(6),
  }),
  handler: async ({ email, password }, { cookies }) => {
    return { ok: true };
  },
});
