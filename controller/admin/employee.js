import { executeQuery } from "../../config/db";
const employee = async (req, res) => {
    const x = `
        call start_employee_role("${req.body.ip_perID}", "${req.body.ip_taxID}", "${req.body.ip_firstName}", "${req.body.ip_lastName}", "${req.body.ip_birthdate}", "${req.body.ip_street}", "${req.body.ip_city}", "${req.body.ip_state}", "${req.body.ip_zip}", "${req.body.ip_dtJoined}", "${req.body.ip_salary}", "${req.body.ip_payments}", "${req.body.ip_earned}", "${req.body.emp_password}");
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { employee };