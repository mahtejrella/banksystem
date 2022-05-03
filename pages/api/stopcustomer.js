import nc from "next-connect";
import { stopcustomer } from "../../controller/admin/stopcustomer";

const handler = nc();
handler.get(stopcustomer);
handler.delete(stopcustomer);
handler.post(stopcustomer);
export default handler;