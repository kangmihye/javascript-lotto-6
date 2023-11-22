import { Random } from "@woowacourse/mission-utils";
import Lotto from "../model/Lotto.js";

const IssueRandomLotto = {
	issueRandomNumber: () => {
		return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
	},
	issueLotto: () => {
		return new Lotto(IssueRandomLotto.issueRandomNumber());
	},
};

export default IssueRandomLotto;
