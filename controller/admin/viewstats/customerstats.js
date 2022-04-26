import { executeQuery } from "../../../config/db";
const getcustomerstats = async (req, res) => {
    const x = `
	select bank_user.perID as person_identifier, taxID as tax_identifier, concat(firstName, ' ', lastName) as customer_name, 
	birthdate as date_of_birth, dtJoined as joined_system, street, city, state, zip, table4.numAccounts as number_of_accounts, 
	ifnull(table4.totalAssets, 0) as customer_assets from
	 
	bank_user natural join customer

	left outer join

	(select perID, numAccounts, totalAssets from
	(select perID, sum(balance) as totalAssets
	from (select perID, balance from access join bank_account where access.bankID = bank_account.bankID and access.accountID = bank_account.accountID) as table1
	group by perID order by perID) as table2
	natural join
	(select perID, count(*) as numAccounts from access group by perID) as table3) as table4
	on bank_user.perID = table4.perID;
    `;
    let customerdata = await executeQuery(x, []);
    res.send(customerdata);
};

export { getcustomerstats };