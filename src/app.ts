import path = require("path");
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

import { config } from 'dotenv';
config();

const app = express();
const PORT = process.env.PORT ?? 3000;

// Global middlewares
app.use(express.json());
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
}));

// Controller routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Serve the app if nothing else to do
app.use(express.static(path.join(__dirname, 'build-ui')));

app.listen(PORT);
