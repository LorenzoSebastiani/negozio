import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { ProductCategoriesEnum } from "src/enum/product-category.enum";

export class CreateProductDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNumber()
    quantity: number;

    @ApiProperty()
    @IsString()
    price: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    photo_path: string;

    @ApiProperty()
    @IsString()
    category: ProductCategoriesEnum;
}