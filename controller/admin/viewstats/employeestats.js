import { executeQuery } from "../../../config/db";
const getemployeestats = async (req, res) => {
    const x = `
	select table3.perID as person_identifier, table3.taxID as tax_identifier, table3.fullName as employee_name, 
	table3.birthdate as date_of_birth, table3.dtJoined as joined_system, table3.street as street, 
	table3.city as city, table3.state as state, table3.zip as zip, table3.customers as number_of_banks, table6.sum_assets as bank_assets from

	(select table1.perID, taxID, concat(firstName, ' ', lastName) as fullName, birthdate, dtJoined, street, city, state, zip, table2.customers 
	from (select * from bank_user natural join employee) as table1
	left outer join
	(select perID, count(*) as customers from workFor group by perID) as table2
	on table1.perID = table2.perID) as table3

	left outer join

	(select table5.perID, sum(table5.total_assets) as sum_assets from
	(select * from display_bank_stats  as table4
	join workFor where table4.bank_identifier = workFor.bankID order by perID) as table5
	group by table5.perID) as table6

	on table3.perID = table6.perID
    `;
    let employeedata = await executeQuery(x, []);
    res.send(employeedata);
};

export { getemployeestats };