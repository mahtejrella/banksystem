import nc from "next-connect";
import { addoverdraft } from "../../controller/admin/addoverdraft";

const handler = nc();
handler.get(addoverdraft);
handler.delete(addoverdraft);
handler.post(addoverdraft);
export default handler;