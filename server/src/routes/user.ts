import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import type { Request, Response } from "express";

export const userRouter: Router = Router();
const prisma = new PrismaClient();

userRouter.get("/", async (_req: Request, res: Response) => {
  res.send("user router working");
});
