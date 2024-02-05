import mongoose from "mongoose";
import app from "./app";
const port = 5000
async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('Database connected successfully!!!');
        app.listen(port, () => {
            console.log(`server listening on port ${port}`)
          })
    } catch (error) {
        console.log(`Internal server error ${error}`);
    }
}
bootstrap()
