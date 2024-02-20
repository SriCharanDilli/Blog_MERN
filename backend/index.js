import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//Middle ware
app.use(express.json());

mongoose.connect(process.env.DATABASE_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`App is listening on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes)