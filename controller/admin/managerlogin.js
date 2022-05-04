import { executeQuery } from "../../config/db";
const managerlogin = async (req, res) => {
    const x = `
    select perID from person where
    (exists(select * from bank where person.perID = bank.manager) and not exists(select * from customer where person.perID = customer.perID))
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { managerlogin };

//call start_employee_role("${req.body.selectedUser}", "${req.body.salary}", "${req.body.payments}", "${req.body.earnings}", null, null,null,null,null,null,null,null,null,null);