"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
const apiResponse_1 = require("../utils/apiResponse");
const asyncHandler_1 = require("../utils/asyncHandler");
const ping = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    res.status(201).json(new apiResponse_1.ApiResponse(200, "This is data", "Data fetched Successfully"));
});
exports.ping = ping;
