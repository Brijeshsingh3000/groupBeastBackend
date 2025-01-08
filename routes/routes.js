"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_1 = __importDefault(require("../controllers/createUser"));
const updateRoomData_1 = __importDefault(require("../controllers/updateRoomData"));
const checkAdminStatus_1 = require("../controllers/checkAdminStatus");
const router = (0, express_1.Router)();
router.post("/api/signup", createUser_1.default);
router.post("/api/updateroom", updateRoomData_1.default);
router.post("/api/checkadminstatus", checkAdminStatus_1.checkAdminStatus);
exports.default = router;
