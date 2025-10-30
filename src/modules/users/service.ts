import bcrypt from 'bcryptjs';
import { usersRepository } from './repository.js';

export const usersService = {
  async register(username: string, email: string, password: string) {
    const exists = await usersRepository.findByEmail(email);
    if (exists) throw new Error('Email déjà utilisé');
    const hashed = await bcrypt.hash(password, 10);
    return usersRepository.create({ username, email, password: hashed });
  },
  async validateCredentials(email: string, password: string) {
    const user = await usersRepository.findByEmail(email);
    if (!user) return null;
    const valid = await bcrypt.compare(password, user.password);
    return valid ? user : null;
  },
  getById: (id: number) => usersRepository.findById(id),
  async update(id: number, data: Partial<{ username: string; email: string; password: string }>) {
    const updates: any = {};
    if (data.username) updates.username = data.username;
    if (data.email) updates.email = data.email;
    if (data.password) updates.password = await bcrypt.hash(data.password, 10);
    return usersRepository.update(id, updates);
  },
  delete: (id: number) => usersRepository.delete(id),
};
