import mongoose from "mongoose";
import { DB_URI } from "./environment.config.js";


// export const connectToMongoDb = () => {
//     mongoose.connect('mongodb+srv://thanh03951:thanh2206202@cluster0.dbj6dbv.mongodb.net/midtest?retryWrites=true&w=majority&appName=Cluster0').then(() => {
//         console.log('Connected to db');
//     })
// }

const connectDB = async () => {
    try {
        const connected = await mongoose.connect(DB_URI);
        console.log(
            `Connected MongoDB: mongodb://${connected.connection.host}:${connected.connection.port}/${connected.connection.name}`
        )
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;