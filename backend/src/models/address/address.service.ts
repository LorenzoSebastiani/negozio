import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entity/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { PatchAddressDto } from './dto/patch-address.dto';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address)
        private repository: Repository<Address>
    ) { }

    //? GET
    async findAll() {
        try {
            const res = await this.repository.find();

            if (!res) {
                console.error("Nessun indirizzo trovato", 400);
                return res;
            }

            return res;
        } catch (error) {
            console.error(error, 400)
            return
        }
    }

    //? GET
    async findByUser(id_user: number) {
        try {
            const res = await this.repository.find({ where: { user: { id: id_user } } });

            if (!res) {
                console.error("Nessun indirizzo trovato", 400);
                return res;
            }

            return res;
        } catch (error) {
            console.error(error, 400)
            return
        }
    }

    //? GET 
    async findOne(id: number) {
        try {
            return await this.repository.findOne({ where: { id: id } })
        } catch (error) {
            console.error(error, 400)
            return
        }
    }

    //? POST
    async create(body: CreateAddressDto) {
        try {
            return await this.repository.save({
                name: body.name,
                delivery_address: body.delivery_address,
                other_info: body.other_info,
                user: { id: body.user }
            });
        } catch (error) {
            console.error(error, 400)
            return
        }
    }

    //? PATCH
    async patch(id: number, body: PatchAddressDto) {
        try {
            return await this.repository.update(id, body)
        } catch (error) {
            console.error(error, 400)
            return
        }
    }

    //? DELETE
    async delete(id: number) {
        try {
            return await this.repository.delete(id)
        } catch (error) {
            console.error(error, 400)
            return
        }
    }
}
