import { executeQuery } from "../../config/db";
const customerlogin = async (req, res) => {
    const x = `
    select perID from person where
    (not exists(select * from bank where person.perID = bank.manager) and exists(select * from customer where person.perID = customer.perID));
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { customerlogin };