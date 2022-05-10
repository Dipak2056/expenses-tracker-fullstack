import express from "express";
import { createExpense } from "../models/Expenses.model.js";
const router = express.Router();

//get
router.get("/", (req, res) => {
  res.json({
    message: "welcome to expenses API",
  });
});
//post
router.post("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    const result = await createExpense({ ...req.body, userId: authorization });
    result?._id
      ? res.json({
          status: "succes",
          message: "welcome to expenses API",
        })
      : res.json({
          status: "error",
          message: "there is some error",
        });
  } catch (error) {
    console.log(error.msg);
  }
});
//delete
router.delete("/", (req, res) => {
  res.json({
    message: "welcome to expenses API",
  });
});

export default router;
