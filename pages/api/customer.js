import nc from "next-connect";
import { customer, createCustomer } from "../../controller/admin/customer";

const handler = nc();
handler.get(customer);
handler.delete(customer);
handler.post(createCustomer);
export default handler;