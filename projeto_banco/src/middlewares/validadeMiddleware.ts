import { Request, Response, NextFunction } from "express";
import z from 'zod';

export function validadeMiddleware(schema: z.ZodType) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body)
            next()
        }
        catch (error) {
            next(error)
        }
    }
}