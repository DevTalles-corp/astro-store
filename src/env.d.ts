/// <reference path="../.astro/actions.d.ts" />
/// <reference types="astro/client" />

interface User {
  email: string;
  name: string;
  avatar: string;
  emailVerified: boolean;
}

declare namespace App {
  interface Locals {
    isLoggedIn: boolean;
    user: User | null;
  }
}
