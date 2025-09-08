import User from "../../modules/user/user.model.js";

export const userPostMiddleware = async (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (!apiKey) {
    return res.status(401).json({ error: "Not found apikey" });
  }
try {
  const user = await User.findOne({ apiKey });
  if (!user) {
    return res.status(401).json({ error: "Invalid apikey" });
  }
  req.user = user; 
  next();
} catch (error) {
  console.log(error);
  
}
};