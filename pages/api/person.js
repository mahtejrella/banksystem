import nc from "next-connect";
import { person } from "../../controller/admin/person";

const handler = nc();
handler.get(person);
handler.delete(person);
handler.post(person);
export default handler;