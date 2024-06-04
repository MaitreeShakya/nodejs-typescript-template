import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
	name: String,
	email: String,
	password: String,
	createdOn: String,
	updatedOn: String,
});

mongoose.model("users", userSchema);
