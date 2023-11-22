import { Random } from "@woowacourse/mission-utils";

const issueRandomLotto = () => {
	return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
};
