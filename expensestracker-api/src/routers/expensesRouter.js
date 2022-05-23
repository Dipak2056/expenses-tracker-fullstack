import express from "express";
import {
  createExpense,
  getExpenses,
  deleteExpense,
  deleteManyExpenses,
} from "../models/Expenses.model.js";
const router = express.Router();

//get
router.get("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    //model get all expenses of userID  = authorization
    const expenses = await getExpenses({ userId: authorization });
    res.json({
      status: "success",
      expenses,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "it is error",
      message: error.message,
    });
  }
});
//post
router.post("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    const result = await createExpense({ ...req.body, userId: authorization });
    result?._id
      ? res.json({
          status: "success",
          message: "expense created succefully",
        })
      : res.json({
          status: "error",
          message: "there is some error creating expenses",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
//delete
router.delete("/", async (req, res) => {
  try {
    const ids = req.body;

    const { authorization } = req.headers;

    const data = await deleteManyExpenses(authorization, ids);
    data?.deletedCount
      ? res.json({
          status: "success",
          message: "successfully deleted",
        })
      : res.json({
          status: "error",
          message: "couldnot delete",
        });

    console.log(data);
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
