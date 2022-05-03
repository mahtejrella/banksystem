import { executeQuery } from "../../config/db";
const customer = async (req, res) => {
    const x = `
        SELECT * FROM customer;
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

const createCustomer = async (req, res) => {

    console.log(req.body)
    const x = `
    call start_customer_role("${req.body.selectedUser}", null, null, null, null, null, null, null, null, null, null);
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { customer, createCustomer };