const path = require("path");
const { DefinePlugin } = require("webpack");
const Dotenv = require("dotenv-webpack");
const externals = require("webpack-node-externals");

module.exports = function (env, argv) {
	const entry = "./src/backend/index.ts";
	const mode = argv.mode;
	const output = { path: path.resolve(__dirname, "./"), filename: "app.js" };

	let globalVarFileName = "dev.global.js";
	if (mode == "production") {
		globalVarFileName = "prod.global.js";
	}
	globalVarFileName = "./GlobalVariables/" + globalVarFileName;

	const config = {
		entry,
		mode,
		output,
		target: "node",
		externals: [externals()],
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					use: [
						{
							loader: "babel-loader",
							options: { presets: ["@babel/preset-env"] },
						},
						{ loader: "ts-loader" },
					],
					exclude: /node_modules/,
				},
			],
		},
		plugins: [new Dotenv(), new DefinePlugin({ "process.browser": "true" })],
		node: { __dirname: false },
		resolve: {
			alias: {
				GlobalVar: path.resolve(__dirname, globalVarFileName),
				"express-handlebars": "handlebars/dist/handlebars.js",
				ejs: "ejs.min.js",
			},
			extensions: [".ts", ".tsx", ".js"],
		},
	};
	return config;
};
