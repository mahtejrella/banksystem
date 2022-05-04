import nc from "next-connect";
import { withdraw } from "../../controller/admin/withdraw";

const handler = nc();
handler.get(withdraw);
handler.delete(withdraw);
handler.post(withdraw);
export default handler;