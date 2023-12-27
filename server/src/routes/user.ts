import { PrismaClient, User } from "@prisma/client";
import { Router } from "express";
import type { Request, Response } from "express";
import {
  emailUpdateSchema,
  passwordUpdateSchema,
  signupSchema,
} from "../zod/zod-schema";
import { generateRandomuserName } from "../util/random-user-name";
import bcrypt from "bcryptjs";
import { authenticateUserJWT, generateUserJWT } from "../jwt-auth/user-auth";

export const userRouter: Router = Router();
const prisma = new PrismaClient();
const saltRounds: number = 8;

userRouter.post("/signup", async (req: Request, res: Response) => {
  try {
    const parsedInput = signupSchema.safeParse(req.body);
    if (!parsedInput.success) {
      return res.status(411).json({ message: parsedInput.error.format() });
    }
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
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    res.sendStatus(500);
  }
});

userRouter.post("/signin", async (req: Request, res: Response) => {
  try {
    const parsedInput = signupSchema.safeParse(req.body);
    if (!parsedInput.success) {
      return res.status(411).json({ message: parsedInput.error.format() });
    }
    const { email, password }: { email: string; password: string } =
      parsedInput.data;
    const userData: User | null = await prisma.user.findUnique({
      where: { email },
    });
    await prisma.$disconnect();
    if (!userData) {
      return res.status(404).json({ message: "User email not found" });
    }
    const isPasswordMatch: boolean = await bcrypt.compare(
      password,
      userData.hashedPassword,
    );
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const { id, randomUserName }: { id: number; randomUserName: string } =
      userData;
    const userPayload: { id: number; randomUserName: string } = {
      id,
      randomUserName,
    };
    const userToken: string = generateUserJWT(userPayload);
    res.cookie("userAccessToken", userToken, {
      domain: "localhost",
      path: "/",
      maxAge: 60 * 60 * 1000,
      secure: true,
      sameSite: "strict",
    });
    return res.json({ message: "Logged in successfully" });
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    res.sendStatus(500);
  }
});

userRouter.post(
  "/logout",
  authenticateUserJWT,
  async (req: Request, res: Response) => {
    try {
      res.clearCookie("userAccessToken");
      res.json({ message: "Logged out successfully" });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
);

userRouter.get(
  "/profile",
  authenticateUserJWT,
  async (req: Request, res: Response) => {
    try {
      const decodedUser: decodedUser = req.decodedUser;
      const userData: getUserDataType | null = await prisma.user.findUnique({
        where: { id: decodedUser.id },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          email: true,
          randomUserName: true,
          profilePicture: true,
        },
      });
      await prisma.$disconnect();
      res.json({ userData });
    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      res.sendStatus(500);
    }
  },
);

userRouter.post(
  "/update-password",
  authenticateUserJWT,
  async (req: Request, res: Response) => {
    try {
      const decodedUser: decodedUser = req.decodedUser;
      const parsedInput = passwordUpdateSchema.safeParse(req.body);
      if (!parsedInput.success) {
        return res.status(411).json({ message: parsedInput.error.format() });
      }
      const {
        currentPassword,
        newPassword,
      }: {
        currentPassword: string;
        newPassword: string;
      } = parsedInput.data;
      const userData: { id: number; hashedPassword: string } | null =
        await prisma.user.findUnique({
          where: { id: decodedUser.id },
          select: {
            id: true,
            hashedPassword: true,
          },
        });
      const isPasswordMath: boolean = await bcrypt.compare(
        currentPassword,
        userData!.hashedPassword,
      );
      if (!isPasswordMath) {
        await prisma.$disconnect();
        return res
          .status(401)
          .json({ message: "Current password does not match." });
      }
      const newHashedPassword: string = await bcrypt.hash(
        newPassword,
        saltRounds,
      );
      await prisma.user.update({
        where: { id: decodedUser.id },
        data: {
          hashedPassword: newHashedPassword,
        },
      });
      await prisma.$disconnect();
      res.json({ message: "Profile updated successfully" });
    } catch (error) {
      await prisma.$disconnect();
      console.error(error);
      res.sendStatus(500);
    }
  },
);

userRouter.post(
  "/update-email",
  authenticateUserJWT,
  async (req: Request, res: Response) => {
    try {
      const decodedUser: decodedUser = req.decodedUser;
      const parsedInput = emailUpdateSchema.safeParse(req.body);
      if (!parsedInput.success) {
        return res.status(411).json(parsedInput.error.format());
      }
      const { newEmail }: { newEmail: string } = parsedInput.data;
      await prisma.user.update({
        where: { id: decodedUser.id },
        data: {
          email: newEmail,
        },
      });
      await prisma.$disconnect();
      res.json({ message: "Email updated successfully" });
    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      res.sendStatus(500);
    }
  },
);
