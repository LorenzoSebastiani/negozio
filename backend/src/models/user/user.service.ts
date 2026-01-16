import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'
import { PatchUserDto } from './dto/patch-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>,
    ) { }

    //? GET
    async findAll() {
        try {
            const res = await this.repository.find();
            if (!res) {
                console.error('Nessun User Trovato', 400);
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
            const res = this.repository.findOne({ where: { id: id } });
            if (!res) {
                console.error(`Nessun User Trovato con id: ${id}`, 400);
                return res;
            }
            return res;
        } catch (error) {

            console.error(error, 400);
            return;
        }
    }

    //? GET
    async findByEmail(email: string) {
        try {
            const res = await this.repository.findOne({ where: { email: email } });

            if (!res) {
                console.error("Nessun account con l'email associata", 400);
                return;
            }
            return res;
        } catch (error) {
            console.error(error, 400);
            return;
        }
    }

    //? POST
    async create(body: CreateUserDto) {
        const hashedPassword = await bcrypt.hash(body.password, 10);

        try {
            const res = this.repository.save({ ...body, password: hashedPassword });
            if (!res) {
                console.error('Errore durante la creazione dello user', 400);
                return;
            }
            return res;
        } catch (error) {
            console.error(error, 400);
            return;
        }
    }

    //? PATCH
    async patch(id: number, body: PatchUserDto) {
        const user = await this.repository.findOne({ where: { id: id } });

        if (!user) {
            console.error(`Nessun utente trovato con id: ${id}`, 400);
            return;
        } else if (body.password) {
            body.password = await bcrypt.hash(body.password, 10);
        }

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
            return await this.repository.delete(id);
        } catch (error) {
            console.error(error, 400);
            return;
        }
    }

    //?
}
