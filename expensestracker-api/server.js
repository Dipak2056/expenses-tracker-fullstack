import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;

//setups middle wares
import cors from "cors";
import morgan from "morgan";
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

//db connection
import { dbConnection } from "./src/config/db.js";
dbConnection();

//apis
import userRouter from "./src/routers/userRouter.js";
app.use("/api/v1/users", userRouter);

//if no calls are made
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
  console.log(req.body);
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`server is running in port ${PORT}`);
});
