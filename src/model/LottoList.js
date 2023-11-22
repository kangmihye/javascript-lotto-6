class LottoList {
	#lottoList = [];

	constructor() {}

	setLottoList(Lotto) {
		this.#lottoList.push(Lotto);
	}

	compareTotalWinningNum(winningNumbers) {
		const equalNumbers = [];
		this.#lottoList.forEach((lotto) => {
			equalNumbers.push(lotto.compareWinningNum(winningNumbers));
		});
		return equalNumbers;
	}

	compareTotalBonusNum(resultsWinningNum, bonusNumbers) {
		const equalFiveIdx = resultsWinningNum.reduce((idxArr, num, idx) => {
			if (num === 5) idxArr.push(idx);
			return idxArr;
		}, []);

		const equalBonusIdx = equalFiveIdx.filter((idx) => this.#lottoList[idx].isIncludedBonusNum(bonusNumbers));

		equalBonusIdx.forEach((idx) => {
			resultsWinningNum[idx] = 5.5;
		});

		return resultsWinningNum;
	}
}

export default LottoList;
