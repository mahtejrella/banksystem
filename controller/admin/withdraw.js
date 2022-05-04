import { executeQuery } from "../../config/db";
const withdraw = async (req, res) => {
    const x = `
    call account_withdrawal("msmith", "${req.body.amount}", "${req.body.selectedBank}", "${req.body.selectedAccount}", "2022-02-02");
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { withdraw };