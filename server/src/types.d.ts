type decodedUser = {
  id: number;
  randomUserName: string;
  iat: number;
  exp: number;
};

declare namespace Experss {
  export interface Request {
    decodedUser: decodedUser;
  }
}
