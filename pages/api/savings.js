import nc from "next-connect";
import { savings } from "../../controller/admin/savings";

const handler = nc();
handler.get(savings);
handler.delete(savings);
handler.post(savings);
export default handler;