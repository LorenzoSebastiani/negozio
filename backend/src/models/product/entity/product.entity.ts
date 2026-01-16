import { ProductCategoriesEnum } from "src/enum/product-category.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 100 })
    name: string;

    @Column({ type: 'int', nullable: false, default: 1 })
    quantity: number;

    @Column({ type: 'string', nullable: false, default: 1 })
    price: string;

    @Column({ type: 'string', nullable: true })
    photo_path?: string;

    @Column({ type: 'enum', nullable: false, enum: ProductCategoriesEnum })
    category: ProductCategoriesEnum;
}