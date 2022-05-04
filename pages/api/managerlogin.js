import nc from "next-connect";
import { managerlogin } from "../../controller/admin/managerlogin";

const handler = nc();
handler.get(managerlogin);
handler.delete(managerlogin);
handler.post(managerlogin);
export default handler;