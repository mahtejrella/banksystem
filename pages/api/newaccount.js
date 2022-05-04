import nc from "next-connect";
import { newaccount } from "../../controller/admin/newaccount";

const handler = nc();
handler.get(newaccount);
handler.delete(newaccount);
handler.post(newaccount);
export default handler;