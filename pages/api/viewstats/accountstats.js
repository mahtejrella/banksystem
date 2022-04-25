import nc from "next-connect";
import { getaccountstats } from "../../../controller/viewstats/accountstats"

const handler = nc();
handler.get(getaccountstats);
export default handler;