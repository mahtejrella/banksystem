import nc from "next-connect";
import { corporation } from "../../controller/admin/corporation";

const handler = nc();
handler.get(corporation);
handler.delete(corporation);
handler.post(corporation);
export default handler;