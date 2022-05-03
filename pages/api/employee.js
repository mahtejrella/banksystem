import nc from "next-connect";
import { employee, createEmployee, deleteEmployee } from "../../controller/admin/employee"

const handler = nc();
handler.get(employee)
handler.delete(deleteEmployee);
handler.post(createEmployee);
export default handler;