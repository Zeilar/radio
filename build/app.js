"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
exports.__esModule = true;
var path = require("path");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var express_session_1 = __importDefault(require("express-session"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var authRoutes_1 = __importDefault(require("./routes/authRoutes"));
var dotenv_1 = require("dotenv");
dotenv_1.config();
var app = express_1["default"]();
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
// Global middlewares
app.use(express_1["default"].json());
app.use(cors_1["default"]());
app.use(express_session_1["default"]({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
}));
// Controller routes
app.use('/api/users', userRoutes_1["default"]);
app.use('/api/auth', authRoutes_1["default"]);
// Serve the app if nothing else to do
app.use(express_1["default"].static(path.join(__dirname, 'build-ui')));
app.listen(PORT);
