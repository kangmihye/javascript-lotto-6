import LottoList from "./model/LottoList.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";

class App {
	async play() {
		const inputPrice = await InputView.readPrice();

		const lottoList = OutputView.printRandomLottos(OutputView.printBoughtLottos(inputPrice), new LottoList());
		console.log(lottoList.get()); //[ Lotto {}, Lotto {} ]

		const inputWinningNumber = await InputView.readWinningNumber();
		console.log(inputWinningNumber);
		const inputBonusNumber = await InputView.readBonusNumber();
		console.log(inputBonusNumber);
	}
}

export default App;
