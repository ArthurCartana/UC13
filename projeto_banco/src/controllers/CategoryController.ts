import { Request, Response } from 'express';
import { CategoryService } from '../services/CategoryService';

const categoryService = new CategoryService();

export class CategoryController {
        async list(req: Request, res: Response) {

                return res.status(200).json(await categoryService.list());
        }

        async show(req: Request, res: Response) {

                return res.status(200).json(await categoryService.show(Number(req.params.id)));
        }

        async create(req: Request, res: Response) {

                const { name } = req.body;

                const category = await categoryService.create(name);

                return res.status(201).json(category);

        }

        async update(req: Request, res: Response) {

                const { name } = req.body;

                const category = await categoryService.update(
                        Number(req.params.id),
                        name
                );

                return res.status(200).json(category);
        }

        async delete(req: Request, res: Response) {

                await categoryService.delete(Number(req.params.id));

                return res.status(204).send();

        }
}
