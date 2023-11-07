import { Console } from "@woowacourse/mission-utils";
import { PRINT_INPUT } from "../utils/Constant.js";
import { isVaildAmount, isVaildBonusNum } from "../utils/checkValidation.js";
import Lotto from "../model/Lotto.js";

const InputPrintout = {
	inputAmount: async () => {
		let amount = await Console.readLineAsync(PRINT_INPUT.inputAmount);
		while (!isVaildAmount(amount)) {
			amount = await Console.readLineAsync(PRINT_INPUT.inputAmount);
		}
		return Number(amount);
	},
	inputLottoNumbers: async () => {
		let numbers = await Console.readLineAsync(PRINT_INPUT.inputNumbers);
		let lotto;
		let isInvaildInput = true;
		while (isInvaildInput) {
			try {
				isInvaildInput = false;
				lotto = new Lotto(numbers);
			} catch (error) {
				isInvaildInput = true;
				Console.print(error);
				numbers = await Console.readLineAsync(PRINT_INPUT.inputNumbers);
			}
		}
		return lotto;
	},
	inputBonusNum: async () => {
		let bonus = await Console.readLineAsync(PRINT_INPUT.inputBonusNum);
		while (!isVaildBonusNum(bonus)) {
			bonus = await Console.readLineAsync(PRINT_INPUT.inputBonusNum);
		}
		return Number(bonus);
	},
};
export default InputPrintout;