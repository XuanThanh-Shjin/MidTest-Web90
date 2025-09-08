import User from "../user/user.model.js";

export const userPostMiddleware = async (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (!apiKey) {
    return res.status(401).json();
  }

  const user = await User.findOne({ apiKey });
  if (!user) {
    return res.status(401).json();
  }

  req.user = user; 
  next();
};