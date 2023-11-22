const OutputViewService = {
	countInputLotto: (inputPrice) => Math.floor(inputPrice / 1000),
	roundSecond: (rate) => Math.round(rate * 100) / 100,
};

export default OutputViewService;
