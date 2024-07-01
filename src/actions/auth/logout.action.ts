import { defineAction, z } from 'astro:actions';

export const logout = defineAction({
  accept: 'json',
  handler: async (_, { cookies }) => {
    return { ok: true };
  },
});
