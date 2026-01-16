import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { PatchProductDto } from './dto/patch-product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private repository: Repository<Product>
    ) { }

    //? GET
    async findAll() {
        try {
            const res = await this.repository.find();

            if (!res) {
                console.error("Nessun prodotto trovato", 400)
                return res;
            }
            return res;
        } catch (error) {
            console.error(error, 400);
            return;
        }
    }

    //? GET
    async findOne(id: number) {
        try {
            const res = await this.repository.findOne({ where: { id: id } });

            if (!res) {
                console.error(`Nessun prodotto trovato con id : ${id}`, 400);
                return res;
            }
            return res;
        } catch (error) {
            console.error(error, 400);
            return;
        }
    }

    //? POST
    async create(body: CreateProductDto) {
        try {
            return await this.repository.save(body);

        } catch (error) {
            console.error(error, 400);
            return;
        }
    }

    //? PATCH
    async patch(id: number, body: PatchProductDto) {
        try {
            return await this.repository.update(id, body);
        } catch (error) {
            console.error(error, 400);
            return;
        }
    }

    //? DELETE
    async delete(id: number) {
        try {
            return await this.repository.delete(id)
        } catch (error) {
            console.error(error, 400);
            return;
        }
    }
}
