import nc from "next-connect";
import { deposit } from "../../controller/admin/deposit";

const handler = nc();
handler.get(deposit);
handler.delete(deposit);
handler.post(deposit);
export default handler;