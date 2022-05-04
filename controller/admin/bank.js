import { executeQuery } from "../../config/db";
const bank = async (req, res) => {
    const x = `
        SELECT * FROM bank;
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

const bankSend = async (req, res) => {

    console.log(req.body)
    const x = `
        call create_bank("${req.body.bank}", "${req.body.name}", "${req.body.street}", "${req.body.city}", "${req.body.state}", "${req.body.zip}", ${req.body.resAssets}, "${req.body.selectedCorp}", "${req.body.selectedManager}", "${req.body.selectedEmployee}");
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { bank, bankSend };