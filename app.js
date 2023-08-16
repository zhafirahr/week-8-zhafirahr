"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import cors from 'cors';
// import bodyParser from 'body-parser';
const routes_1 = __importDefault(require("./routes"));
// import { json } from 'body-parser'
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
// app.use(cors())
app.use(express_1.default.json());
app.use('/api/v1/data', routes_1.default);
// auth
// app.use('/api/v1/auth', auth);
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
