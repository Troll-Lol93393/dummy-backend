import { ApiResponse } from "../utils/apiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";

const ping = asyncHandler(async (req: Request, res: Response) => {
    res.status(201).json(
        new ApiResponse(200, "This is data", "Data fetched Successfully")
    )
});

export { ping };