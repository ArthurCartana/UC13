import { Request, Response } from 'express';
import { CategoryService } from '../services/CategoryService';

const categoryService = new CategoryService();

export class CategoryController {
    async list(req: Request, res: Response) {
        try {
            return res.status(200).json(await categoryService.list());
        } catch {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async show(req: Request, res: Response) {
        try {
            return res.status(200).json(await categoryService.show(Number(req.params.id)));
        } catch (error: any) {
            if (error.message === 'Category not found') {
                return res.status(404).json({ message: error.message });
            }

            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { name } = req.body;

            const category = await categoryService.create(name);

            return res.status(201).json(category);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { name } = req.body;

            const category = await categoryService.update(
                Number(req.params.id),
                name
            );

            return res.status(200).json(category);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await categoryService.delete(Number(req.params.id));

            return res.status(204).send();
        } catch (error: any) {
            if (error.message === 'Category not found') {
                return res.status(404).json({ message: error.message });
            }

            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}