import nc from "next-connect";
import { getaccountstats } from "../../../controller/admin/viewstats/accountstats"

const handler = nc();
handler.get(getaccountstats);
export default handler;