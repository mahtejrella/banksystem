import nc from "next-connect";
import { workFor, sendWorkFor } from "../../controller/admin/workFor";

const handler = nc();
handler.get(workFor);
handler.post(workFor);
handler.delete(workFor);
handler.post(sendWorkFor);
export default handler;