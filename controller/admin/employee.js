import { executeQuery } from "../../config/db";
const employee = async (req, res) => {
    const x = `
        SELECT * FROM employee;
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { employee };