import { executeQuery } from "../../config/db";
const deposit = async (req, res) => {
    const x = `
        call account_deposit("${req.body.username}", "${req.body.amount}", "${req.body.selectedBank}", "${req.body.selectedAccount}", "2022-02-02");
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { deposit };