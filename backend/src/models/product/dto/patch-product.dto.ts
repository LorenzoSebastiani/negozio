import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { ProductCategoriesEnum } from "src/enum/product-category.enum";

export class PatchProductDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    quantity?: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    price?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    photo_path: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    category?: ProductCategoriesEnum;
}