import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import type { Request, Response } from "express";

export const userRouter: Router = Router();
const prisma = new PrismaClient();

userRouter.get("/signup", async (req: Request, res: Response) => {
  try {

  } catch (error) {
    console.error(error);
    prisma.$disconnect();
    res.sendStatus(500);
  }
});
