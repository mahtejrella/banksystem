import nc from "next-connect";
import { getemployeestats } from "../../../controller/viewstats/employeestats"

const handler = nc();
handler.get(getemployeestats);
export default handler;