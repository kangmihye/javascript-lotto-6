import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_VIEW } from "../utils/Constants.js";
import OutputViewService from "./viewService/OutputViewService.js";

const OutputView = {
	printBoughtLottos(inputPrice) {
		const lottoCount = OutputViewService.countInputLotto(inputPrice);
		Console.print(OUTPUT_VIEW.printLottos(lottoCount));
	},
	// ...
};

export default OutputView;
