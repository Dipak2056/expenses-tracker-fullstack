import { getUser } from "../models/User.model.js";

export const userAuth = async (req, res, next) => {
  //code
  try {
    const { authorization } = req.headers;
    if (authorization) {
      //check in db
      const user = await getUser(authorization);
      console.log(user);
      return user?._id
        ? next()
        : res.status(403).json({
            status: "error",
            message: "you are not authorize to acces this resources",
          });
    }
    res.status(403).json({
      status: "error",
      message: "you are not authorize to acces this resources",
    });
    console.log(authorization);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "you are not authorize to access this resources",
    });
  }
};
