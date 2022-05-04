import { executeQuery } from "../../config/db";
const removeoverdraft = async (req, res) => {
    const x = `
        call stop_overdraft("${req.body.username}", "${req.body.selectedBank}", "${req.body.selectedChecking}");
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { removeoverdraft };