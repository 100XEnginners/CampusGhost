type decodedUser = {
  id: number;
  randomUserName: string;
  iat: number;
  exp: number;
};

declare namespace Experss {
  interface Request {
    decodedUser: decodedUser;
  }
}
