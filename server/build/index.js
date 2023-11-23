"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const port = 3001;
// const dotenv = require("dotenv");
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(router_1.default);
console.log("working");
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
