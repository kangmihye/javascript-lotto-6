class Lotto {
	#numbers; // 하나하나 []형태로 저장

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers;
	}

	#validate(numbers) {
		if (numbers.length !== 6) {
			throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
		}
	}

	compareWinningNum(winningNumbers) {
		return this.#numbers.filter((num) => winningNumbers.includes(num)).length;
	}
}

export default Lotto;
