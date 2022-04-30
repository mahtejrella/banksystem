import nc from "next-connect";
import { getcorporationstats, postcorporationstats } from "../../../controller/admin/viewstats/corporationstats"

const handler = nc();
handler.get(getcorporationstats);
handler.post(postcorporationstats);
export default handler;