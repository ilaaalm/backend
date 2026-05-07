import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/database.js';

dotenv.config({
    path: './.env'
});

const startserver = async () => {
    try {
        await connectDB();

        app.on('error', error => {
            console.log('Database not connected', error);
            throw error
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on PORT: ${process.env.PORT}`);
        });
    } catch (err) {
        console.log(`MongoDatabase connection failed: ${err}`)
    }
}

startserver();