import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;

//setups middle wares
import cors from "cors"; //to avoid cross origin reference
import morgan from "morgan"; //to find where the data is flowing
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

//db connection imported from db.js
import { dbConnection } from "./src/config/db.js";
dbConnection();

//middlewares
import { userAuth } from "./src/middlewares/authMiddleware.js";

//apis end points
import userRouter from "./src/routers/userRouter.js";
import expensesRouter from "./src/routers/expensesRouter.js";
app.use("/api/v1/users", userRouter);
app.use("/api/v1/expenses", userAuth, expensesRouter);

//if no calls are made
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
  console.log(req.body);
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`server is running in port ${PORT}`);
});
