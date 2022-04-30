import nc from "next-connect";
import { stopcustomerrole } from "../../controller/admin/stopcustomerrole"

const handler = nc();
handler.get(stopcustomerrole)
handler.delete(stopcustomerrole);
export default handler;