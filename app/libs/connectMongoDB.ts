import mongoose from "mongoose";

export const connectMongoDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/task_pilot");
};
