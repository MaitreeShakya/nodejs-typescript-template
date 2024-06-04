import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";

export default function () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
