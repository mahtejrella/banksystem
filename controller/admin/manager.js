import { executeQuery } from "../../config/db";
const manager = async (req, res) => {
    const x = `
        SELECT * FROM workFor;
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

const replaceManager = async (req, res) => {
    const x = `
    call replace_manager("${req.body.selectedEmployee}", "${req.body.selectedBank}", ${req.body.salary});
    `;

    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
}

export { manager, replaceManager };

//call start_employee_role("${req.body.selectedUser}", "${req.body.salary}", "${req.body.payments}", "${req.body.earnings}", null, null,null,null,null,null,null,null,null,null);