import nc from "next-connect";
import { bank, bankSend } from "../../controller/admin/bank";

const handler = nc();
handler.get(bank);
handler.delete(bank);
handler.post(bankSend);
export default handler;