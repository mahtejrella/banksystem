import nc from "next-connect";
import { transfer } from "../../controller/admin/transfer";

const handler = nc();
handler.get(transfer);
handler.delete(transfer);
handler.post(transfer);
export default handler;