import nc from "next-connect";
import { checking } from "../../controller/admin/checking";

const handler = nc();
handler.get(checking);
handler.delete(checking);
handler.post(checking);
export default handler;