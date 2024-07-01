import { defineMiddleware } from 'astro:middleware';
import { getSession } from 'auth-astro/server';

const notAuthenticatedRoutes = ['/login', '/register'];

export const onRequest = defineMiddleware(
  async ({ url, locals, redirect, request }, next) => {
    const session = await getSession(request);
    const isLoggedIn = !!session;
    const user = session?.user;

    console.log({ user });

    // TODO:
    locals.isLoggedIn = isLoggedIn;
    locals.user = null;

    if (user) {
      // TODO:
      locals.user = {
        name: user.name!,
        email: user.email!,
      };

      // locals.isAdmin = user.role === 'admin'
    }

    // TODO: Eventualmente tenemos que controlar el acceso por roles
    if (!isLoggedIn && url.pathname.startsWith('/dashboard')) {
      return redirect('/');
    }

    if (isLoggedIn && notAuthenticatedRoutes.includes(url.pathname)) {
      return redirect('/');
    }

    return next();
  }
);
