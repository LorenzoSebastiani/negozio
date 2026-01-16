import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { Roles } from 'src/decorators/roles.decorator';
import { RoleEnum } from 'src/enum/role.enum';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { PatchProductDto } from './dto/patch-product.dto';

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) { }

    @Roles(RoleEnum.ADMIN, RoleEnum.CUSTOMER, RoleEnum.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get()
    getProducts() {
        return this.productService.findAll()
    }

    @Roles(RoleEnum.ADMIN, RoleEnum.CUSTOMER, RoleEnum.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get(':id')
    getProductById(@Param('id') id: number) {
        return this.productService.findOne(id)
    }

    @Roles(RoleEnum.ADMIN, RoleEnum.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post()
    create(@Body() body: CreateProductDto) {
        return this.productService.create(body);
    }

    @Roles(RoleEnum.ADMIN, RoleEnum.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Patch(':id')
    patch(@Param('id') id: number, @Body() body: PatchProductDto) {
        return this.productService.patch(id, body);
    }

    @Roles(RoleEnum.ADMIN, RoleEnum.SELLER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productService.delete(id)
    }
}
