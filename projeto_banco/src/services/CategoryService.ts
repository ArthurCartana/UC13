import { AppDataSource } from '../config/dataSource';
import { Category } from '../models/Category';

const categoryRepository = AppDataSource.getRepository(Category);

export class CategoryService {
    async list() {
        return categoryRepository.find({
            relations: { products: true },
            order: { id: 'ASC' }
        });
    }

    async show(id: number) {
        const category = await categoryRepository.findOne({
            where: { id },
            relations: { products: true }
        });

        if (!category) {
            throw new Error('Category not found');
        }

        return category;
    }

    async create(name: string) {
        if (!name) {
            throw new Error('Name is required');
        }

        const category = categoryRepository.create({ name });

        await categoryRepository.save(category);

        return category;
    }

    async update(id: number, name?: string) {
        const category = await categoryRepository.findOneBy({ id });

        if (!category) {
            throw new Error('Category not found');
        }

        if (name) {
            category.name = name;
        }

        await categoryRepository.save(category);

        return category;
    }

    async delete(id: number) {
        const category = await categoryRepository.findOneBy({ id });

        if (!category) {
            throw new Error('Category not found');
        }

        await categoryRepository.remove(category);
    }
}