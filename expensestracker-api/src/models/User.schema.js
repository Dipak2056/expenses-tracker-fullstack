import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "password must be atleast 6 char long"], //this is how we give the custom error message
    },
  },
  {
    //this automatically add the time stamps on the database
    timestamps: true,
  }
);
export default mongoose.model("User", userSchema);
