import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";

class App {
	async play() {
		const inputPrice = await InputView.readPrice();
		console.log(inputPrice);
		OutputView.printBoughtLottos(inputPrice);
	}
}

export default App;
