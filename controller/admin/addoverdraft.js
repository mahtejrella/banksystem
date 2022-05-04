import { executeQuery } from "../../config/db";
const addoverdraft = async (req, res) => {
    const x = `
        call start_overdraft("mmoss7", "${req.body.selectedBank}", "${req.body.selectedChecking}", "${req.body.selectedBank1}", "${req.body.selectedSavings}");
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { addoverdraft };