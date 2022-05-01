import nc from "next-connect";
import { employee, createEmployee } from "../../controller/admin/employee"

const handler = nc();
handler.get(employee)
handler.delete(employee);
handler.post(createEmployee);
export default handler;