import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { User } from "src/models/user/entity/user.entity";

export class CreateAddressDto {
    @ApiProperty()
    @IsNumber()
    id_user: number;

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