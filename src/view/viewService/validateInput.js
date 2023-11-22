import { ERROR } from "../../utils/Constants.js";
import { isInvalidNumber, isInvalidPrice } from "../../utils/conditions.js";

export const validatePrice = (input) => {
	if (isInvalidNumber(input)) throw new Error(ERROR.isInvalidNum);
	if (isInvalidPrice(input)) throw new Error(ERROR.isInvalidPrice);
};
