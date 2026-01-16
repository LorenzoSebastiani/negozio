import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PatchUserDto } from './dto/patch-user.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { RoleEnum } from 'src/enum/role.enum';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Roles(RoleEnum.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get()
    getUsers() {
        return this.userService.findAll();
    }

    @Roles(RoleEnum.ADMIN, RoleEnum.CUSTOMER, RoleEnum.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get(':id')
    getUserById(@Param('id') id: number) {
        return this.userService.findOne(id)
    }

    @Roles(RoleEnum.ADMIN, RoleEnum.CUSTOMER, RoleEnum.SELLER)
    @Post('register')
    create(@Body() body: CreateUserDto) {
        return this.userService.create(body)
    }

    @Roles(RoleEnum.ADMIN, RoleEnum.CUSTOMER, RoleEnum.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Patch(':id')
    patch(@Param('id') id: number, @Body() body: PatchUserDto) {
        return this.userService.patch(id, body);
    }

    @Roles(RoleEnum.ADMIN, RoleEnum.CUSTOMER, RoleEnum.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.userService.delete(id)
    }
}
