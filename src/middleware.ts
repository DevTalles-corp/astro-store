import { defineMiddleware } from 'astro:middleware';

const notAuthenticatedRoutes = ['/login', '/register'];

export const onRequest = defineMiddleware(
  async ({ url, locals, redirect }, next) => {
    const isLoggedIn = false;

    // TODO:
    locals.isLoggedIn = isLoggedIn;
    locals.user = null;

    if (locals.user) {
      // TODO:
      // locals.user = {
      //   avatar: user.photoURL ?? '',
      //   email: user.email!,
      //   name: user.displayName!,
      //   emailVerified: user.emailVerified,
      // };
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
