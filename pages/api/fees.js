import nc from "next-connect";
import { fees, createFees } from "../../controller/admin/fees";

const handler = nc();
handler.get(fees);
handler.delete(fees);
handler.post(createFees);
export default handler;