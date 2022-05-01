import { executeQuery } from "../../config/db";
const savings = async (req, res) => {
    const x = `
        SELECT * FROM savings;
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};



export { savings };