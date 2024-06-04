import mongoose, { Schema } from "mongoose";

const expenseSchema = new Schema({
  description: String,
  amount: Number,
  type: String,
  createdOn: String,
  createdBy: String
})

mongoose.model("expenses", expenseSchema);