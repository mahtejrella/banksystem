import nc from "next-connect";
import { admin } from "../../controller/admin/admin";

const handler = nc();
handler.get(admin);
handler.delete(admin);
handler.post(admin);
export default handler;