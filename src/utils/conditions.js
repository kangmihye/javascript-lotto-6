import {} from "../utils/Constants.js";

export const isInvalidNumber = (input) => {
	input = Number(input.replaceAll(" ", ""));
	return !Number.isInteger(input) || Number.isNaN(input);
};

export const isInvalidPrice = (input) => {
	return Number(input) < 1000;
};
