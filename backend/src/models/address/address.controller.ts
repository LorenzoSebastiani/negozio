import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AddressService } from './address.service';
import { Roles } from 'src/decorators/roles.decorator';
import { RoleEnum } from 'src/enum/role.enum';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { CreateAddressDto } from './dto/create-address.dto';
import { PatchAddressDto } from './dto/patch-address.dto';

@Controller('address')
export class AddressController {
    constructor(
        private readonly addressService: AddressService
    ) { }

    @Roles(RoleEnum.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get()
    getAddresses() {
        return this.addressService.findAll()
    }

    @Roles(RoleEnum.ADMIN, RoleEnum.CUSTOMER, RoleEnum.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get(':id_user')
    getAddressesByUser(@Param('id_user') id_user: number) {
        return this.addressService.findByUser(id_user)
    }

    @Roles(RoleEnum.ADMIN, RoleEnum.CUSTOMER, RoleEnum.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get(':id')
    getAddressById(@Param('id') id: number) {
        return this.addressService.findOne(id)
    }

    @Roles(RoleEnum.ADMIN, RoleEnum.CUSTOMER, RoleEnum.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post()
    createAddress(@Body() body: CreateAddressDto) {
        return this.addressService.create(body)
    }

    @Roles(RoleEnum.ADMIN, RoleEnum.CUSTOMER, RoleEnum.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Patch(':id')
    patchAddress(@Param('id') id: number, @Body() body: PatchAddressDto) {
        return this.addressService.patch(id, body)
    }

    @Roles(RoleEnum.ADMIN, RoleEnum.CUSTOMER, RoleEnum.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    deleteAddress(@Param('id') id: number) {
        return this.addressService.delete(id)
    }
}
