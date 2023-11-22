class LottoList {
	LottoList = []; // [[]]형태로 저장

	constructor() {}

	setLottoList(Lotto) {
		this.LottoList.push(Lotto);
	}

	get() {
		//삭제예정
		return this.LottoList;
	}

	//여기서 총 맞은 개수 저장
	compareTotalWinningNum(winningNumbers) {
		const equalNumbers = [];
		this.LottoList.forEach((lotto) => {
			equalNumbers.push(lotto.compareWinningNum(winningNumbers));
		});

		return equalNumbers;
	}
}

export default LottoList;
