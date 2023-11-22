const generateResultObj = (resultsBonusNum) => {
	const result = {
		3: 0,
		4: 0,
		5: 0,
		5.5: 0,
		6: 0,
	};
	resultsBonusNum.forEach((resultNum) => {
		if (resultNum >= 3) {
			result[resultNum] = result[resultNum] + 1;
		}
	});
	return result;
};

export default generateResultObj;
