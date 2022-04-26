import nc from "next-connect";
import { getbankstats } from "../../../controller/viewstats/bankstats"

const handler = nc();
handler.get(getbankstats);
export default handler;