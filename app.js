require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT ?? 3000;

// Global middlewares
app.use(express.json());
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }, // One week
}));

// Controller routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Serve the frontend if nothing else to do
app.use(express.static(path.join(__dirname, 'build-ui')));

app.listen(PORT);
