import express from "express";
import type { Request, Response, Express } from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user";

dotenv.config({
  override: true
})

const app: Express = express();
app.use(express.json());

app.use("/user", userRouter);

app.get("/ping", async (_req: Request, res: Response) => {
  try {
    res.send("pong");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);

  }
})

app.listen(process.env.PORT, () => {
  console.log(`Express server is listenng on http://localhost:${8080}`)
})
