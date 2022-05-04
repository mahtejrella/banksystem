import { executeQuery } from "../../config/db";
const newaccount = async (req, res) => {
    const x = `
        call add_account_access("${req.body.username}", "${req.body.selectedCustomer}", "${req.body.selectedAccount}", "${req.body.selectedBank}", "${req.body.accountID}", ${req.body.initial}, ${req.body.rate}, null, ${req.body.min}, 0, ${req.body.withdrawals}, '2022-03-04');
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { newaccount };