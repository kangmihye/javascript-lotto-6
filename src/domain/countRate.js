import { PRICE } from "../utils/Constants.js";

const countRate = (inputPrice, result) => {
	let totalPrice = 0;
	for (let num in result) {
		totalPrice += result[num] * PRICE[num];
	}
	return (totalPrice / Number(inputPrice)) * 100;
};

export default countRate;

// console.log(countRate("14000", { 3: 1, 4: 0, 5: 0, 6: 0, 5.5: 0 })); 35.714285714285715
// Math.round(roundNumber * 100) / 100;
