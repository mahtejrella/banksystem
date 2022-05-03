import { executeQuery } from "../../config/db";
const stopemployee = async (req, res) => {
    const x = `
        call stop_employee_role("${req.body.selectedUser}");
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};


export { stopemployee };