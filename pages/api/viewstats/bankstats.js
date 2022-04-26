import nc from "next-connect";
import { getbankstats } from "../../../controller/admin/viewstats/bankstats"

const handler = nc();
handler.get(getbankstats);
export default handler;