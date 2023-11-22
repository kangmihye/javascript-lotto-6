export const INPUT_VIEW = Object.freeze({
	askPrice: "구입금액을 입력해 주세요.\n",
	askWinningNumber: "당첨 번호를 입력해 주세요.\n",
	askBonusNumber: "보너스 번호를 입력해 주세요.\n",
});

export const OUTPUT_VIEW = Object.freeze({
	printLottos: (lottoCount) => `${lottoCount}개를 구매했습니다.`,
	printResult: (result) =>
		`3개 일치 (5,000원) - ${result[3]}개\n` +
		`4개 일치 (50,000원) - ${result[4]}개\n` +
		`5개 일치 (1,500,000원) - ${result[5]}개\n` +
		`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[5.5]}개\n` +
		`6개 일치 (2,000,000,000원) -  ${result[6]}개\n`,
});
