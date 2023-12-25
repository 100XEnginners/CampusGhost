import jwt from "jsonwebtoken";

export function generateUserJWT(userPayload: {
  id: number;
  randomUserName: string;
}): string {
  return jwt.sign(userPayload, process.env.USER_JWT_SECRET!, {
    expiresIn: process.env.TOKEN_EXPIRY,
    algorithm: "HS256",
  });
}
