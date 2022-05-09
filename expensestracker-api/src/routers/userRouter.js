//these are core import from express
import express from "express";
const router = express.Router();

//these are dependencies import from models
import { insertUser, findUser } from "../models/User.model.js";

//get user
router.get("/", (req, res) => {
  console.log(req.body);
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
router.post("/login", async (req, res) => {
  try {
    const user = await findUser(req.body);
    //we use this method when we may receive some null, so it is called nulish operator
    user?._id
      ? res.json({ status: "success", user })
      : res.json({
          staus: "error",
          message: "invalid login details",
        });
  } catch (error) {
    console.log(error);

    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
