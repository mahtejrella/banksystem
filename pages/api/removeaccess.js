import nc from "next-connect";
import { removeaccess } from "../../controller/admin/removeaccess";

const handler = nc();
handler.get(removeaccess);
handler.delete(removeaccess);
handler.post(removeaccess);
export default handler;