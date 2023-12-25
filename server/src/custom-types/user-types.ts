export type User = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  hashedPassword: string;
  randomUserName: string;
  profilePicture: string | null;
};
