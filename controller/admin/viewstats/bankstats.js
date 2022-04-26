import { executeQuery } from "../../../config/db";
const getbankstats = async (req, res) => {
    const x = `
	select table2.bankID as bank_identifier, shortName as name_of_corporation, bankName as name_of_bank, street, 
	city, state, zip, number_of_accounts, table2.resAssets as bank_assets, 
	ifnull(table2.resAssets, 0) + ifnull(table3.customer_assets, 0) as total_assets
	from

	(select bank.bankID, shortName, bankName, street, city, state, zip, bank.resAssets from bank 
		join corporation as table1 on table1.corpID = bank.corpID) as table2
		
	left outer join

	(select bankID, count(*) as number_of_accounts, sum(balance) as customer_assets from bank_account group by bankID) as table3
	on table2.bankID = table3.bankID;
    `;
    let bankdata = await executeQuery(x, []);
    res.send(bankdata);
};

export { getbankstats };