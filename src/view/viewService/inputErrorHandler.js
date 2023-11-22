import { Console } from "@woowacourse/mission-utils";

const inputErrorHandler = async (msg, validator) => {
	let input = await Console.readLineAsync(msg);
	try {
		validator(input);
	} catch (error) {
		Console.print(error.toString());
		input = await inputErrorHandler(msg, validator);
	}
	return input;
};

export default inputErrorHandler;
