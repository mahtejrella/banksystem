import nc from "next-connect";
import { addaccess } from "../../controller/admin/addaccess";

const handler = nc();
handler.get(addaccess);
handler.delete(addaccess);
handler.post(addaccess);
export default handler;