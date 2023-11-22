import { Console } from "@woowacourse/mission-utils";
import { INPUT_VIEW } from "../utils/Constants.js";
import { validatePrice } from "./viewService/validateInput.js";
import inputErrorHandler from "./viewService/inputErrorHandler.js";

const InputView = {
	async readPrice() {
		const inputPrice = inputErrorHandler(INPUT_VIEW.askPrice, validatePrice);
		return inputPrice;
	},
	async readWinningNumber() {
		const inputWinningNumber = await Console.readLineAsync(INPUT_VIEW.askWinningNumber);
		return inputWinningNumber;
	},
	async readBonusNumber() {
		const inputBonusNumber = await Console.readLineAsync(INPUT_VIEW.askBonusNumber);
		return inputBonusNumber;
	},
};

export default InputView;
