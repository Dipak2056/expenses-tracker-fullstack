import express from "express";
const router = express.Router();

//get user
router.get("/", (req, res) => {
  res.send("login user");
  console.log(req.body);
});

//register user
router.post("/", (req, res) => {
  res.send("create user");
  console.log(req.body);
});
//login user
router.post("/login", (req, res) => {
  res.send("login user");
});

export default router;
