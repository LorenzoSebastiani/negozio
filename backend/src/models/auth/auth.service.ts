import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    //? POST
    async login(email: string, password: string) {
        const user = await this.userService.findByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException("Credenziali non valide");
        }

        const payload = { sub: user.id, email: user.email, roles: user.roles }

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
