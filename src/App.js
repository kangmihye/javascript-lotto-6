import InputView from "./view/InputView.js";

class App {
	async play() {
		const a = await InputView.readPrice();
		console.log(a);
	}

}

export default App;
