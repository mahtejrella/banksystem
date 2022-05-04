import nc from "next-connect";
import { customerlogin } from "../../controller/admin/customerlogin";

const handler = nc();
handler.get(customerlogin);
handler.delete(customerlogin);
handler.post(customerlogin);
export default handler;