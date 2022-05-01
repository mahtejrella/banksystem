import { executeQuery } from "../../config/db";
const checking = async (req, res) => {
    const x = `
        SELECT * FROM checking;
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};



export { checking };