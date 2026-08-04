import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

const productService = new ProductService();

export class ProductController {
    async list(req: Request, res: Response) {
        try {
            return res.status(200).json(await productService.list());
        } catch {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async show(req: Request, res: Response) {
        try {
            return res.status(200).json(await productService.show(Number(req.params.id)));
        } catch (error: any) {
            if (error.message === 'Product not found') {
                return res.status(404).json({ message: error.message });
            }

            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { name, price, categoryId } = req.body;

            const product = await productService.create(
                name,
                Number(price),
                Number(categoryId)
            );

            return res.status(201).json(product);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { name, price, categoryId } = req.body;

            const product = await productService.update(
                Number(req.params.id),
                name,
                price ? Number(price) : undefined,
                categoryId ? Number(categoryId) : undefined
            );

            return res.status(200).json(product);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await productService.delete(Number(req.params.id));

            return res.status(204).send();
        } catch (error: any) {
            if (error.message === 'Product not found') {
                return res.status(404).json({ message: error.message });
            }

            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}