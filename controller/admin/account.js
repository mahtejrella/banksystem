import { executeQuery } from "../../config/db";
const account = async (req, res) => {
    const x = `
        SELECT * FROM bank_account;
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { account };