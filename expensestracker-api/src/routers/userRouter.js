import express from "express";
const router = express.Router();
import { insertUser } from "../models/User.model.js";
//get user
router.get("/", (req, res) => {
  res.send("get user");
});

//register user
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await insertUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "user registered successfull",
        })
      : res.json({
          status: "error",
          message: "user registered unsuccessfull",
        });
  } catch (error) {
    let message = error.message;
    if (error.message.includes("duplicate key error collection")) {
      message = "User already exist with same email";
    }
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
//login user
router.post("/login", (req, res) => {
  res.send("login user");
});

export default router;
