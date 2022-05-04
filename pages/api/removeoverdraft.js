import nc from "next-connect";
import { removeoverdraft } from "../../controller/admin/removeoverdraft";

const handler = nc();
handler.get(removeoverdraft);
handler.delete(removeoverdraft);
handler.post(removeoverdraft);
export default handler;