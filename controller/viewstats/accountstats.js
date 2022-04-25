import { executeQuery } from "../../config/db";
const getaccountstats = async (req, res) => {
    const x = 'select * from bank';
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { getaccountstats };