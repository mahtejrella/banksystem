import { executeQuery } from "../../config/db";
const fees = async (req, res) => {
    const x = `
        SELECT * FROM interest_bearing_fees;
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

const createFees = async (req, res) => {

    const x = `
    call create_fee("${req.body.selectedBank}", "${req.body.selectedAccount}", "${req.body.fee}");
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { fees, createFees };