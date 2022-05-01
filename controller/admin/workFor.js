import { executeQuery } from "../../config/db";
const workFor = async (req, res) => {
    const x = `
        SELECT * FROM workFor;
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

const sendWorkFor = async (req, res) => {
    const x = `
    call create_bank("${req.body.ip_bankID}", "${req.body.ip_bank_employee}");
    `
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
}

export { workFor, sendWorkFor };