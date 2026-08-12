import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

const productService = new ProductService();

export class ProductController {
        async list(req: Request, res: Response) {

                return res.status(200).json(await productService.list());

        }

        async show(req: Request, res: Response) {

                return res.status(200).json(await productService.show(Number(req.params.id)));

        }

        async create(req: Request, res: Response) {

                const { name, price, categoryId } = req.body;

                const product = await productService.create(
                        name,
                        Number(price),
                        Number(categoryId)
                );

                return res.status(201).json(product);

        }

        async update(req: Request, res: Response) {

                const { name, price, categoryId } = req.body;

                const product = await productService.update(
                        Number(req.params.id),
                        name,
                        price ? Number(price) : undefined,
                        categoryId ? Number(categoryId) : undefined
                );

                return res.status(200).json(product);

        }

        async delete(req: Request, res: Response) {

                await productService.delete(Number(req.params.id));

                return res.status(204).send();

        }
}