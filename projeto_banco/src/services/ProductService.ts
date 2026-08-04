import { AppDataSource } from '../config/dataSource';
import { Product } from '../models/Product';
import { Category } from '../models/Category';

const productRepository = AppDataSource.getRepository(Product);
const categoryRepository = AppDataSource.getRepository(Category);

export class ProductService {
    async list() {
        return productRepository.find({
            relations: { category: true },
            order: { id: 'ASC' }
        });
    }

    async show(id: number) {
        const product = await productRepository.findOne({
            where: { id },
            relations: { category: true }
        });

        if (!product) {
            throw new Error('Product not found');
        }

        return product;
    }

    async create(name: string, price: number, categoryId: number) {
        if (!name || !price || !categoryId) {
            throw new Error('Name, price and categoryId are required');
        }

        const category = await categoryRepository.findOneBy({ id: categoryId });

        if (!category) {
            throw new Error('Category not found');
        }

        const product = productRepository.create({
            name,
            price,
            category
        });

        await productRepository.save(product);

        return product;
    }

    async update(id: number, name?: string, price?: number, categoryId?: number) {
        const product = await productRepository.findOneBy({ id });

        if (!product) {
            throw new Error('Product not found');
        }

        if (name) {
            product.name = name;
        }

        if (price) {
            product.price = price;
        }

        if (categoryId) {
            const category = await categoryRepository.findOneBy({ id: categoryId });

            if (!category) {
                throw new Error('Category not found');
            }

            product.category = category;
        }

        await productRepository.save(product);

        return product;
    }

    async delete(id: number) {
        const product = await productRepository.findOneBy({ id });

        if (!product) {
            throw new Error('Product not found');
        }

        await productRepository.remove(product);
    }
}