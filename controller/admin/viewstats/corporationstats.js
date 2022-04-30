import { executeQuery } from "../../../config/db";
const getcorporationstats = async (req, res) => {
    const x = `
	select table4.corpID as corporation_identifier, table4.shortName as short_name, table4.longName as formal_name, 
	table4.number_of_banks as number_of_banks, table4.resAssets as corporation_assets, 
	table4.resAssets + ifnull(table5.total_assets,0) as total_assets from

	(select corporation.corpID, shortName, longName, table1.number_of_banks, resAssets from corporation left outer join 
	(select corpID, count(*) as number_of_banks from bank group by corpID) as table1 on corporation.corpID = table1.corpID) as table4

	left outer join

	(select corpID, (table2.total_assets + table3.customer_assets) as total_assets from 
	(select corpID, sum(resAssets) as total_assets from bank group by corpID) as table2
	natural join
	(select corpID, sum(balance) as customer_assets from (select corpID, 
		balance from bank_account join bank on bank_account.bankID = bank.bankID) as table1
	 group by corpID) as table3) as table5
	 
	on table4.corpID = table5.corpID;
    `;
    let corporationdata = await executeQuery(x, []);
    res.send(corporationdata);
};

const postcorporationstats = async (req, res) => {
	console.log(req.body);
	const x = `
	call create_corporation("${req.body.ip_corpID}", "${req.body.ip_shortName}", "${req.body.ip_longName}", "${Number(req.body.ip_resAssets)}"); 
	`;
	console.log(x)
	let corporationdata = await executeQuery(x, []);
    res.send(corporationdata);
}

export { getcorporationstats, postcorporationstats };