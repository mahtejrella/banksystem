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

    const x = `
    call start_customer_role("${req.body.selectedUser}", null, null, null, null, null, null, null, null, null, null);
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

const deleteCustomer = async (req, res) => {

    const x = `
    call stop_customer_role("${req.body.selectedUser}");
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { customer, createCustomer, deleteCustomer };