import mongoose from "mongoose";

export async function connectDB() {
  await mongoose.connect("mongodb://localhost:27017/choices");
  console.log("mongo conectado");
}
