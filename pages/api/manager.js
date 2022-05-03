import nc from "next-connect";
import { manager, replaceManager } from "../../controller/admin/manager";

const handler = nc();
handler.get(manager);
handler.delete(manager);
handler.post(manager);
handler.put(replaceManager);
export default handler;