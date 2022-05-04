import { executeQuery } from "../../config/db";
const transfer = async (req, res) => {
    const x = `
        call account_transfer("${req.body.username}", "${req.body.amount}", "${req.body.selectedFromBank}", "${req.body.selectedFromAccount}", "${req.body.selectedToBank}", "${req.body.selectedToAccount}", "2022-02-02");
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};


export { transfer };