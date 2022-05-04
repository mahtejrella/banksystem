import nc from "next-connect";
import { customerandmanager } from "../../controller/admin/customerandmanager";

const handler = nc();
handler.get(customerandmanager);
handler.delete(customerandmanager);
handler.post(customerandmanager);
export default handler;