import { NextFunction, Request, Response } from "express";
import { get, controller, use, post, bodyValidator } from "./decorators";

@controller("/")
class ExpenseController {
	@get("expense")
	getExpenses(req: Request, res: Response): void {
		res.send(`
		<form method = "POST">
			<div>
				<label>Description</label>
				<input name="description" />
			</div>
			<div>
				<label>Amount</label>
				<input name="amount" />
			</div>
			<button>Submit</button>
		</form>
		`);
	}

	@post("expense")
	@bodyValidator("amount", "description")
	postExpenses(req: Request, res: Response): void {
		res.send("Data saved");
	}
}
