import nc from "next-connect";
import { getcorporationstats } from "../../../controller/viewstats/corporationstats"

const handler = nc();
handler.get(getcorporationstats);
export default handler;