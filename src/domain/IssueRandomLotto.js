import { Random } from "@woowacourse/mission-utils";
import Lotto from "../model/Lotto.js";

const IssueRandomLotto = {
	issueRandomNumber: () => {
		return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
	},
	issueLotto: (radomNum) => {
		return new Lotto(radomNum);
	},
};

export default IssueRandomLotto;
