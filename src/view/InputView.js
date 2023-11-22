import { Console } from "@woowacourse/mission-utils";
import { INPUT_VIEW } from "../utils/Constants.js";

const InputView = {
	async readPrice() {
		const inputPrice = await Console.readLineAsync(INPUT_VIEW.askPrice);
		return inputPrice;
	},
	async readWinningNumber() {
		const inputWinningNumber = await Console.readLineAsync(INPUT_VIEW.askWinningNumber);
		return inputWinningNumber;
	},
};

export default InputView;
