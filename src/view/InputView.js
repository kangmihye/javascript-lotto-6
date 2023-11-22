import { Console } from "@woowacourse/mission-utils";
import { INPUT_VIEW } from "../utils/Constants.js";

const InputView = {
	async readPrice() {
		const input = await Console.readLineAsync(INPUT_VIEW.askPrice);

		// ...
	},
	// ...
};

export default InputView;
