import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_VIEW } from "../utils/Constants.js";
import OutputViewService from "./viewService/OutputViewService.js";
import IssueRandomLotto from "../domain/IssueRandomLotto.js";
import countRate from "../domain/countRate.js";

const OutputView = {
	printBoughtLottos(inputPrice) {
		const lottoCount = OutputViewService.countInputLotto(inputPrice);
		Console.print(OUTPUT_VIEW.printLottos(lottoCount));
		return lottoCount;
	},
	printRandomLottos(lottoCount, lottoList) {
		//나중에 리펙
		Array.from({ length: lottoCount }).forEach(() => {
			const radomNum = IssueRandomLotto.issueRandomNumber();
			lottoList.setLottoList(IssueRandomLotto.issueLotto(radomNum));
			Console.print(radomNum);
		});
		Console.print("");

		return lottoList;
	},
	printResult(result) {
		Console.print(OUTPUT_VIEW.printResult(result));
	},
	printRate(inputPrice, result) {
		const rate = countRate(inputPrice, result);
		Console.print(OUTPUT_VIEW.printRate(OutputViewService.roundSecond(rate)));
	},
};

export default OutputView;
