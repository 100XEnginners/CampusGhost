import { PrismaClient, User } from "@prisma/client";
import { Router } from "express";
import type { Request, Response } from "express";
import { signupSchema } from "../zod/zod-schema";
import { generateRandomuserName } from "../util/random-user-name";
import bcrypt from "bcryptjs";

export const userRouter: Router = Router();
const prisma = new PrismaClient();

userRouter.post("/signup", async (req: Request, res: Response) => {
  try {
    const parsedInput = signupSchema.safeParse(req.body);
    if (!parsedInput.success) {
      return res.status(411).json({ message: parsedInput.error.format() });
    } else {
      const { email, password }: { email: string; password: string } =
        parsedInput.data;
      const userData: User | null = await prisma.user.findUnique({
        where: { email },
      });
      if (userData) {
        await prisma.$disconnect();
        return res
          .status(403)
          .json({ message: "User email address already exists" });
      }
      const saltRounds: number = 8;
      const hashedPassword: string = await bcrypt.hash(password, saltRounds);
      const randomUserName: string = generateRandomuserName(10);
      await prisma.user.create({
        data: {
          email,
          hashedPassword,
          randomUserName,
        },
      });
      await prisma.$disconnect();
      return res.json({ message: "User created successfully" });
    }
  } catch (error) {
    console.error(error);
    prisma.$disconnect();
    res.sendStatus(500);
  }
});
