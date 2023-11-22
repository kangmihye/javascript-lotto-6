import compareResult from "./domain/compareResult.js";
import generateResultObj from "./domain/generateResultObj.js";
import LottoList from "./model/LottoList.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
import InputViewService from "./view/viewService/InputViewService.js";

class App {
	async play() {
		const inputPrice = await InputView.readPrice();

		const lottoList = OutputView.printRandomLottos(OutputView.printBoughtLottos(inputPrice), new LottoList());
		console.log(lottoList.get()); //[ Lotto {}, Lotto {} ]

		const parsedWinningNumber = InputViewService.parseInput(await InputView.readWinningNumber());
		console.log(parsedWinningNumber);

		const resultsWinningNum = compareResult.getResultCompareWinningNum(lottoList, parsedWinningNumber);

		const bonusNumbers = await InputView.readBonusNumber();

		console.log("위닝결과", resultsWinningNum);

		const resultsBonusNum = compareResult.getResultCompareBonusNum(lottoList, resultsWinningNum, bonusNumbers);

		console.log("보너스 결과", resultsBonusNum);

		const result = generateResultObj(resultsBonusNum);

		console.log("결과객체", result);
	}
}

export default App;
