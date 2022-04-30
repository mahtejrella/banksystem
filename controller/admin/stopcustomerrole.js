import { executeQuery } from "../../config/db";
const stopcustomerrole = async (req, res) => {
    const x = `
    call stop_customer_role("${req.body.person_identifier}");
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { stopcustomerrole };