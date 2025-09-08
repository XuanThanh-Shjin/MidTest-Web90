
import Post from "./post.model.js";


export const userPost = async (req, res) => {
    try {
        const { userId, content } = req.body;
        if (!userId || !content) {
            return res.status(400).json({ error: "Error" });
        }
        if (req.user.userId.toString() !== userId) {
            return res.status(403).json({ error: "Error!" });
        }

        const newPost = new Post({ userId, content});
        const savedPost = await newPost.save();

        return res.status(200).json({ message: "Sucessfully", post: savedPost }); 
    } catch (err) {
        return res.status(500).json({ error: "Error!!", details: err.message });
    }
};

export default userPost;
