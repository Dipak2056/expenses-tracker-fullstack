import UserSchema from "./User.schema.js";

//create few function that does query on the basis of user schema

//insert user
export const insertUser = (obj) => {
  return UserSchema(obj).save();
};
//get user
export const getUser = (_id) => {
  return UserSchema.findById(_id);
};
//find user by any filter
//@filter must be an object
export const findUser = (filter) => {
  return UserSchema.findOne(filter);
};

//update user
export const updateUser = (_id, obj) => {
  return UserSchema.findByIdAndUpdate(_id, obj); //obj must be an object
};
