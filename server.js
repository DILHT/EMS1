import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import Router from './routes/employee.route.js';

dotenv.config();
connectDB();


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/employees",Router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));