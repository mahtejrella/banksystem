import { executeQuery } from "../../config/db";
const pay = async (req, res) => {
    const x = `
        call pay_employees();
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};


export { pay };