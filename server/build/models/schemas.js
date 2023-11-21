"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Define Mongoose schemas using the interfaces
const taskSchema = new mongoose_1.default.Schema({
    task: String, //may be change back to task
    id: String,
    date: Date,
    parent: String,
    completed: Boolean,
});
exports.projectSchema = new mongoose_1.default.Schema({
    project: String,
    date: Date,
    description: String,
    id: String,
    tasks: [taskSchema],
});
