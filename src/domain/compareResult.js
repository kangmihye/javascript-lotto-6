const compareResult = {
	getResultCompareWinningNum: (lottoList, winningNumbers) => {
		return lottoList.compareTotalWinningNum(winningNumbers);
	},
	getResultCompareBonusNum: (lottoList, resultsWinningNum, bonusNumbers) => {
		return lottoList.compareTotalBonusNum(resultsWinningNum, Number(bonusNumbers));
	},
};

export default compareResult;
