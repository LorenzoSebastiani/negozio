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
            const res = await this.repository.find({ relations: ['user'] });

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
            const res = await this.repository.find({ where: { user: { id: id_user } }, relations: ['user'] });

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
            return await this.repository.findOne({ where: { id: id }, relations: ['user'] })
        } catch (error) {
            console.error(error, 400)
            return
        }
    }

    //? POST
    async create(body: CreateAddressDto) {
        try {
            const res = await this.repository.save(body);

            if (!res) {
                console.error("Errore durante la creazione dell'indirizzo", 400)
                return res;
            }

            return res;
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
