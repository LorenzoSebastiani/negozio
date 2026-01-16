import { RoleEnum } from "src/enum/role.enum";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
    roles: RoleEnum
}