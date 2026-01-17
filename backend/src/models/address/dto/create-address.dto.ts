import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateAddressDto {
    @ApiProperty()
    @IsNumber()
    user: number;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    delivery_address: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    other_info?: string;
}