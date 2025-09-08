
// import { createResponse } from "../../common/configs/response.config.js";
// import { comparePassword, hashPassword } from "../../common/utils/password-handler.js";
// import User from "../user/user.model.js"
// import MESSAGE from "./auth.message.js";


// export const authRegisterService = async (userData) => {
//     const { email, password } = userData;
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//         createResponse(res, 400, MESSAGE.EMAIL_ALREADY_EXISTS);
//     }
//     const passwordHash = hashPassword(password);
//     const newUser = await User.create({ ...userData, password: passwordHash });
//     newUser.password = undefined;
//     return newUser;
// };

// export const authLoginService = async (userData) => {
//     const { email, password } = userData;
//     const existingUser = await User.findOne({ email });
//     if (!existingUser) {
//         createResponse(res, 400, MESSAGE.INVALID_CREDENTIALS);
//     }
//     console.log(existingUser);
//     const isPasswordValid = comparePassword(password, existingUser.password);
//     if (! isPasswordValid) {
//         createResponse(res, 400, MESSAGE.INVALID_CREDENTIALS);
//     }
//     existingUser.password = undefined;
//     return existingUser;
// }