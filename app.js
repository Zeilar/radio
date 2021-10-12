require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const { loggedIn } = require("./middlewares/auth");

const authRoutes = require('./routes/authRoutes');
const likeRoutes = require('./routes/likeRoutes');

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
app.use('/api/auth', authRoutes);
app.use('/api/like', loggedIn, likeRoutes);

// Serve the frontend if nothing else to do in the backend
app.use(express.static(path.join(__dirname, 'ui')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'ui/index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
