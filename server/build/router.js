"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controllers/controller");
const router = express_1.default.Router();
router.post("/breakdown", controller_1.getDataFromAPI);
router.post("/projects", controller_1.postProject);
router.get("/projects", controller_1.getProjects);
router.delete("/projects", controller_1.deleteProject);
router.put("/projects/toggleCompleted", controller_1.toggleCompleted);
exports.default = router;
