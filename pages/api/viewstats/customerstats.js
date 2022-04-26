import nc from "next-connect";
import { getcustomerstats } from "../../../controller/admin/viewstats/customerstats"

const handler = nc();
handler.get(getcustomerstats);
export default handler;