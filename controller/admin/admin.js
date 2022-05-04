import { executeQuery } from "../../config/db";
const admin = async (req, res) => {
    const x = `
        SELECT * from system_admin;
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { admin };