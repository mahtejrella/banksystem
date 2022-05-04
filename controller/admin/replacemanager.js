import { executeQuery } from "../../config/db";

const replacemanager = async (req, res) => {
    const x = `
    call replace_manager("${req.body.selectedEmployee}", "${req.body.selectedBank}", ${req.body.salary});
    `
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
}

export { replacemanager };