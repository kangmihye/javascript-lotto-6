import { PRICE } from "../utils/Constants.js";

const countRate = (inputPrice, result) => {
	let totalPrice = 0;
	for (let num in result) {
		totalPrice += result[num] * PRICE[num];
	}
	return (totalPrice / Number(inputPrice)) * 100;
};

export default countRate;
