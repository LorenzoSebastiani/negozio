import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class PatchAddressDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    delivery_address?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    other_info?: string;
}