import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/apiError";
import db from "../db/models";
import bcrypt from "bcrypt"
import { ApiResponse } from "../utils/apiResponse";

const { user } = db;

const register = asyncHandler(async (req: Request, res: Response) => {
	const { firstName, lastName, email, password: passsword, role, middleName, confirmPassword } = req.body;

	// check if all fields exists
	if ([firstName, lastName, email, passsword, role, confirmPassword].some((field: string) => !field || field.trim() === '')) {
		throw new ApiError(400, "All fields are required")
	}

	if (passsword !== confirmPassword) {
		throw new ApiError(400, "Password & Confirm password does not match !")
	}

	const existedUser = await user.findOne({ where: { email } });

	if (existedUser) {
		throw new ApiError(400, "Email is already registered, please login !");
	}

	const hashedPassword = await bcrypt.hash(passsword, 10);

	const newUser = await user.create({
		role: role,
		firstName: firstName,
		middleName: middleName,
		lastName: lastName,
		email: email,
		password: hashedPassword,
	});

	if (!newUser) {
		throw new ApiError(500, "Something went wrong while registering the user");
	}

	const userData = newUser.toJSON();

	const { id, password, ...sanitizedData } = userData;

	res.status(201).json(
		new ApiResponse(201, sanitizedData, "User registered Successfully")
	);
});

export { register };
