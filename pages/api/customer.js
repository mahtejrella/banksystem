import nc from "next-connect";
import { customer, createCustomer, deleteCustomer } from "../../controller/admin/customer";

const handler = nc();
handler.get(customer);
handler.delete(deleteCustomer);
handler.post(createCustomer);
export default handler;