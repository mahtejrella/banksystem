import { executeQuery } from "../../config/db";
const corporation = async (req, res) => {
    const x = `
        SELECT * FROM corporation;
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { corporation };