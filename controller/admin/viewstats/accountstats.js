import { executeQuery } from "../../../config/db";
const getaccountstats = async (req, res) => {
    const x = `
    select table3.bankName as name_of_bank, table3.accountID as account_identifier, table3.balance as account_assets, 
	table4.num_of_owners as number_of_owners from 
	(select bank.bankID, bankName, accountID, balance from bank join bank_account on bank_account.bankID = bank.bankID

	join

	(select bankID, count(*) from workFor group by bankID) as table2
	on bank.bankID = table2.bankID) as table3 
	natural join
	(select bankID, accountID, count(*) as num_of_owners from access group by bankID,accountID) as table4;
    `;
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { getaccountstats };