import { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {
  console.log(req)
  return res.json({ message: "Hello World" });
};