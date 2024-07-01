// import GitHub from '@auth/core/providers/github';
import { User, db, eq } from 'astro:db';
import { defineConfig } from 'auth-astro';
import Credentials from '@auth/core/providers/credentials';
import bcrypt from 'bcryptjs';

export default defineConfig({
  providers: [
    //TODO:
    // GitHub({
    //   clientId: import.meta.env.GITHUB_CLIENT_ID,
    //   clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    // }),

    Credentials({
      credentials: {
        email: { label: 'Correo', type: 'email' },
        password: { label: 'Contraseña', type: 'password' },
      },
      authorize: async ({ email, password }) => {
        const [user] = await db
          .select()
          .from(User)
          .where(eq(User.email, `${email}`));

        if (!user) {
          throw new Error('User not found');
        }

        if (!bcrypt.compareSync(password as string, user.password)) {
          throw new Error('Invalid password');
        }

        const { password: _, ...rest } = user;
        console.log({ rest });
        return rest;
      },
    }),
  ],
});
