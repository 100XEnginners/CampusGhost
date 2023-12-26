import type { Request, Response, NextFunction } from "express";
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

export function authenticateUserJWT(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token: string = req.cookies.userAccessToken;
  if (token) {
    jwt.verify(token, process.env.USER_JWT_SECRET!, (err, decoded) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.decodedUser = decoded as decodedUser;
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
}
