import { executeQuery } from "../../config/db";
const stopcustomerrole = async (req, res) => {
    const x = `
    call stop_customer_role("${req.body.ip_corpID}");
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { stopcustomerrole };