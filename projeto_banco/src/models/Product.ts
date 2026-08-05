import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from './Category';

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false, default: 0.00 })
    price: number;

    @ManyToOne(() => Category, category => category.products)
    category: Category;
}