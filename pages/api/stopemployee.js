import nc from "next-connect";
import { stopemployee } from "../../controller/admin/stopemployee";

const handler = nc();
handler.get(stopemployee);
handler.delete(stopemployee);
handler.post(stopemployee);
export default handler;