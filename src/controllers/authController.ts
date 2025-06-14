import { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, role } = req.body;

  
};

export { register };
