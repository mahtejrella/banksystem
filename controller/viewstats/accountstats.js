import { executeQuery } from "../../config/db";
const getaccountstats = async (req, res) => {
    let accountdata = await executeQuery('select * from bank', []);
    res.send(accountdata);
};

export { getaccountstats };