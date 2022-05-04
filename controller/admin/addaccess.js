import { executeQuery } from "../../config/db";
const addaccess = async (req, res) => {
    const x = `
    call add_account_access("mmoss7", "${req.body.selectedExistingCustomer}", null, "${req.body.selectedExistingBank}", "${req.body.selectedExistingAccount}", null, null, null, null, null, null, '2022-03-04');
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { addaccess };