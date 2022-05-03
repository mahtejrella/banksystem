import { executeQuery } from "../../config/db";
const employee = async (req, res) => {
    const x = `
        SELECT * FROM employee;
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

const createEmployee = async (req, res) => {
    const x = `
        call start_employee_role("${req.body.selectedUser}", null, null, null, null, null, null, null, null, null, ${req.body.salary}, ${req.body.payments}, ${req.body.earnings}, null);
    `;

    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
}

export { employee, createEmployee };

//call start_employee_role("${req.body.selectedUser}", "${req.body.salary}", "${req.body.payments}", "${req.body.earnings}", null, null,null,null,null,null,null,null,null,null);