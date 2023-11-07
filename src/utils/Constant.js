"use strict";

const NEWLINE = "\n";
const COMMA = ",";

const LOTTO = Object.freeze({
	minRange: 1,
	maxRange: 45,
	count: 6,
	cost: 1000,
});

const PRINT_INPUT = Object.freeze({
	inputAmount: "구입금액을 입력해 주세요.\n",
	inputNumbers: "\n당첨 번호를 입력해 주세요.\n",
	inputBonusNum: "\n보너스 번호를 입력해 주세요.\n",
});

const PRINT_OUTPUT = Object.freeze({
	outputLottoCount: "개를 구매했습니다.",
	outputWinnigRanks: "\n당첨 통계\n---",
});

const ERROR_MESSAGE = Object.freeze({
	invalidNumbersCount: "[ERROR] 로또 번호는 6개여야 합니다.",
	duplication: "[ERROR] 중복되지 않은 숫자를 입력해주세요",
	invalidNumberRange:
		"[ERROR] 로또 번호의 숫자 범위는 1~45입니다. 범위 내의 숫자를 입력해주세요",
	invalidInputNumber: "[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해주세요.",
	invalidInputAmount: "[ERROR] 1000원 이상 입력해주세요",
});

export { LOTTO, PRINT_INPUT, PRINT_OUTPUT, ERROR_MESSAGE, NEWLINE, COMMA };
