import { Console } from "@woowacourse/mission-utils";
import { PRINT_OUTPUT, PRINT_MATHINGNUMBER, NEWLINE } from "../utils/Constant.js";
import LottoController from "../controller/LottoController.js";

const OutputPrintout = {
	printLottos: (amount) => {
		const count = LottoController.countLottos(amount);
		Console.print(`${NEWLINE}${count}${PRINT_OUTPUT.outputLottoCount}`);

		Array.from({ length: count }).forEach(() => {
			const lotto = LottoController.generateLotto();
			LottoController.setLottoList(lotto);
			Console.print(lotto);
		});
	},
	printMathingNumberList: (winningNumber, bonusNumber) => {
		Console.print(PRINT_OUTPUT.outputMatchingNum);
		LottoController.setMatchingNumMap(winningNumber, bonusNumber);

		OutputPrintout.printMathingNumber();
	},
	printMathingNumber: () => {
		const constantMap = new Map([
			[PRINT_OUTPUT.three, PRINT_MATHINGNUMBER.three],
			[PRINT_OUTPUT.four, PRINT_MATHINGNUMBER.four],
			[PRINT_OUTPUT.five, PRINT_MATHINGNUMBER.five],
			[PRINT_OUTPUT.fiveBonus, PRINT_MATHINGNUMBER.fiveBonus],
			[PRINT_OUTPUT.six, PRINT_MATHINGNUMBER.six],
		]);
		constantMap.forEach((value, key) => {
			Console.print(
				`${value}${LottoController.matchingNumMap.get(key)}${PRINT_MATHINGNUMBER.unit}`
			);
		});
	},
};
export default OutputPrintout;
