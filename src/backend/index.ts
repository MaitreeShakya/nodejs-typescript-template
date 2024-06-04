import bodyParser from "body-parser";
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import "./controller/ExpenseController";
import { AppRouter } from "./AppRouter";
import path from "path";
import ejs from "ejs";

const PORT = process.env.PORT ? process.env.PORT : 5000;
const mode = process.env.NODE_ENV;
const root = mode === "production" ? "/" : "/";

const app: Express = express();

/**
 * Connect to MongoDB
 */
const mongoConnectionString = process.env.MONGO_CONNECTION_STRING
	? process.env.MONGO_CONNECTION_STRING
	: "mongodb://localhost:27017/test";

mongoose
	.connect(mongoConnectionString)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.warn("Error connecting to MongoDB", err);
	});

/**
 * Middlewares
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

/**
 *
 */
app.use(AppRouter.getInstance());

/**
 * Ejs Template Engine
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, "./build")));

/**
 *
 */
app.get(`${root}`, function (req: Request, res: Response) {
	res.render("index", { root });
});

app.listen(PORT, () => {
	console.log("App Listenting on PORT", PORT);
});
