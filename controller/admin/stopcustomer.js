import { executeQuery } from "../../config/db";
const stopcustomer = async (req, res) => {
    const x = `
        call stop_customer_role("${req.body.selectedUser}");
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};


export { stopcustomer };