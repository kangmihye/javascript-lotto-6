const InputViewService = {
	parseInput: (inputWinningNumber) => {
		return inputWinningNumber.split(",").map((num) => Number(num));
	},
};

export default InputViewService;
