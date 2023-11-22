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
		const parsedWinningNumber = InputViewService.parseInput(await InputView.readWinningNumber());
		const resultsWinningNum = compareResult.getResultCompareWinningNum(lottoList, parsedWinningNumber);
		const bonusNumbers = await InputView.readBonusNumber();
		const resultsBonusNum = compareResult.getResultCompareBonusNum(lottoList, resultsWinningNum, bonusNumbers);
		const result = generateResultObj(resultsBonusNum);
		OutputView.printResult(result);
		OutputView.printRate(inputPrice, result);
	}
}

export default App;
