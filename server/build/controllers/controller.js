"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.getProjects = exports.postProject = exports.getDataFromAPI = void 0;
const api_1 = __importDefault(require("../api"));
const index_1 = require("../models/index");
function getDataFromAPI(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO check if req.body has correct format
        try {
            const data = yield (0, api_1.default)(req.body);
            res.status(200);
            res.send(data);
        }
        catch (err) {
            console.error("Error with getting data from API: ", err);
            res.sendStatus(500);
        }
    });
}
exports.getDataFromAPI = getDataFromAPI;
function postProject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newProject = req.body;
            console.log(newProject);
            const response = yield index_1.db.create(newProject);
            console.log(response);
            res.status(201);
            res.send(response);
        }
        catch (err) {
            console.error("err", err);
            res.sendStatus(500);
        }
    });
}
exports.postProject = postProject;
function getProjects(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield index_1.db.find({});
            res.status(201);
            res.send(response);
        }
        catch (err) {
            console.error("err", err);
            res.status(500);
        }
    });
}
exports.getProjects = getProjects;
function deleteProject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        try {
            const response = yield index_1.db.deleteOne({ id: req.body.id });
            console.log("deleted: ", response);
            res.status(201);
            res.send(response);
        }
        catch (error) {
            console.error("Error when deleting project from db: ", error);
        }
    });
}
exports.deleteProject = deleteProject;
// await db.collection('inventory').deleteOne({ status: 'D' });
