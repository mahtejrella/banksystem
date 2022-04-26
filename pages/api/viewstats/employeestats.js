import nc from "next-connect";
import { getemployeestats } from "../../../controller/admin/viewstats/employeestats"

const handler = nc();
handler.get(getemployeestats);
export default handler;