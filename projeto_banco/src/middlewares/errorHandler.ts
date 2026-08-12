import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export async function erroHandler(error: Error | AppError, req:Request, res:Response, next:NextFunction) {

    console.error(error.message)

    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message }) 
    }
    
    return res.status(500).json({ message: 'Internal server error'})
} 