import { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";
import { UserRoutes } from "./modules/user/user.route";
const app: Application = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
// application routes;
app.use("/api/v1/user", UserRoutes);

export default app;
