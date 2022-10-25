import { productList } from "../../utils";

function handler(req, res) {
  res.status(200).json({ productList });
}
export default handler;
