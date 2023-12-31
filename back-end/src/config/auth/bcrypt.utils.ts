// bcryptUtils.ts
import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export const comparePassword = async (plainTextPassword: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};
