import { Router } from "express";
import type { Request, Response } from "express";

export const userRouter: Router = Router();

userRouter.get("/", async (_req: Request, res: Response) => {
  res.send("user router working");
});
