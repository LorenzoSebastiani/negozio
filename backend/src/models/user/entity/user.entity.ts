import { RoleEnum } from "src/enum/role.enum";
import { Address } from "src/models/address/entity/address.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 50 })
    name: string;

    @Column({ type: 'varchar', nullable: false, length: 50 })
    last_name: string;

    @Column({ type: 'varchar', unique: true, nullable: false })
    email: string;

    @Column({ type: 'varchar', nullable: false })
    password: string

    @Column({ type: 'enum', enum: RoleEnum, default: [RoleEnum.CUSTOMER] })
    role: RoleEnum

    //? Relazioni inverse
    @OneToMany(() => Address, address => address.user)
    addresses: Address[];
}