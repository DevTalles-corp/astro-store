import { Role, User, db } from 'astro:db';
import { v4 as UUID } from 'uuid';
import bcrypt from 'bcryptjs';

// https://astro.build/db/seed
export default async function seed() {
  const roles = [
    { id: 'admin', name: 'Administrador' },
    { id: 'user', name: 'Usuario de sistema' },
  ];

  const johnDoe = {
    id: UUID(),
    name: 'John Doe',
    email: 'john.doe@google.com',
    password: bcrypt.hashSync('123456'),
    role: 'admin',
  };

  const janeDoe = {
    id: UUID(),
    name: 'Jane Doe',
    email: 'jane.doe@google.com',
    password: bcrypt.hashSync('123456'),
    role: 'user',
  };

  await db.insert(Role).values(roles);
  await db.insert(User).values([johnDoe, janeDoe]);
}
