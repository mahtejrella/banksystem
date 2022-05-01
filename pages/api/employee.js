import nc from "next-connect";
import { employee } from "../../controller/admin/employee"

const handler = nc();
handler.get(employee)
handler.delete(employee);
export default handler;