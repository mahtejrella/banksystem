import nc from "next-connect";
import { pay } from "../../controller/admin/pay"

const handler = nc();
handler.post(pay);
export default handler;