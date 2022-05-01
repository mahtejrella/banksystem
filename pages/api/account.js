import nc from "next-connect";
import { account } from "../../controller/admin/account";

const handler = nc();
handler.get(account);
handler.delete(account);
handler.post(account);
export default handler;