
import Post from "./post.model.js";


export const userPost = async (req, res) => {
    try {
        const { userId, content } = req.body;
        if (!userId || !content) {
            return res.status(400).json({ error: "Error" });
        }
        if (req.user._id.toString() !== userId) {
            return res.status(403).json({ error: "Error!" });
        }

        const post = new Post({ userId, content});
        await post.save();

        return res.status(200).json({ message: "Sucessfully", post }); 
    } catch (err) {
        return res.status(500).json({ error: "Error!!", details: err.message });
    }
};

export default userPost;
