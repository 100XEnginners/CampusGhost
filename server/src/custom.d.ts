type getUserDataType = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  randomUserName: string;
  profilePicture: string | null;
};

type decodedUser = {
  id: number;
  randomUserName: string;
  iat: number;
  exp: number;
};

declare namespace Express {
  export interface Request {
    decodedUser: decodedUser;
  }
}
