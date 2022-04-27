import nc from "next-connect";
import { getcorporationstats } from "../../controller/admin/viewstats/corporationstats"

const handler = nc();
handler.post(getcorporationstats);
export default handler;