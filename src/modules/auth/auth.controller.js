import { createResponse } from "../../common/configs/response.config.js";
import { comparePassword, hashPassword } from "../../common/utils/password-handler.js";
import User from "../user/user.model.js"
import MESSAGE from "./auth.message.js";
import crypto from "crypto";


export const authResgister = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            createResponse(res, 400, MESSAGE.EMAIL_ALREADY_EXISTS);
        }
        const passwordHash = hashPassword(password);
        const newUser = await User.create({ ...req.body, password: passwordHash });
        // newUser.password = undefined;
        createResponse(res, 200, MESSAGE.REGISTER_SUCCESS, newUser)
    } catch (error) {
        console.log(error);
    }
};

export const authLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            createResponse(res, 400, MESSAGE.LOGIN_FAILURE);
        }
        createResponse(res, 200, MESSAGE.LOGIN_SUCCESS, existingUser)
        const isPasswordValid = comparePassword(password, existingUser.password);
        if (!isPasswordValid) {
            createResponse(res, 400, MESSAGE.INVALID_CREDENTIALS);
        }
        const randomString = crypto.randomUUID();
        const apiKey = `mern-${existingUser._id}-${existingUser.email}-${randomString}`;

        existingUser.apikey = apiKey;
        await existingUser.save();
        return res.status(200).json({ apiKey });
        // existingUser.password = undefined;
    } catch (error) {
        console.log(error);
    }
}