import { executeQuery } from "../../config/db";
const person = async (req, res) => {
    const x = `
        SELECT * FROM person;
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { person };