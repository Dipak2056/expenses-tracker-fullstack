import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    const conString = "mongodb://localhost:27017/expenses_tracker";
    const con = mongoose.connect(conString);

    con && console.log("connected to mongo");
  } catch (error) {
    console.log(error);
  }
};
