import mongoose from "mongoose";


const userPostSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    }, 
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model("Post", userPostSchema);