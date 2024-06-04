const path = require("path");
const { ProvidePlugin, optimize } = require("webpack");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (env, argv) {
	const entry = {
		myExpense: [
			"./src/frontend/stylesheets/entry.scss",
			"./src/frontend/typescripts/index.tsx",
		],
	};
	const mode = argv.mode;
	const output = {
		path: path.resolve(__dirname + "/build"),
		filename: "bundle.js",
		publicPath: mode == "production" ? "/" : "/",
	};

	let globalVarFileName = "dev.global.js";
	if (mode == "production") {
		globalVarFileName = "prod.global.js";
	}
	globalVarFileName = "./GlobalVariables/" + globalVarFileName;

	const config = {
		entry,
		mode,
		output,
		module: {
			rules: [
				{
					test: /\.(ts|tsx)x?$/,
					use: [{ loader: "babel-loader" }, { loader: "ts-loader" }],
					exclude: /node_modules/,
				},
				{
					test: /\.(sc|sa|c)ss$/,
					use: [
						{ loader: MiniCssExtractPlugin.loader },
						{ loader: "css-loader" },
						{
							loader: "postcss-loader",
							options: {
								sourceMap: true,
								postcssOptions: {
									plugins: (loader) => [
										require("postcss-import")(),
										require("autoprefixer")(),
									],
								},
							},
						},
					],
				},
			],
		},
		plugins: [
			new Dotenv(),
			new MiniCssExtractPlugin({
				filename: "./css/[name].css",
				chunkFilename: "./css/[name].[id].css",
			}),
			new ProvidePlugin({ GlobalVar: "GlobalVar" }),
			new optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
		],
		resolve: {
			alias: {
				GlobalVar: path.resolve(
					__dirname,
					"GlobalVariables/" + globalVarFileName
				),
				"express-handlebars": "handlebars/dist/handlebars.js",
				ejs: "ejs.min.js",
			},
			extensions: [".tsx", ".ts", ".js"],
		},
	};

	return config;
};
