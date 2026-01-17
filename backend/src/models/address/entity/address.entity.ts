import { User } from "src/models/user/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('address')
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    //? Relazioni
    @ManyToOne(() => User, (_: User) => _.id, {
        nullable: false,
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    })
    @JoinColumn({ name: 'id_user' })
    user: User;

    @Column({ type: 'varchar', nullable: false, length: 100 })
    name: string;

    @Column({ type: 'varchar', nullable: false, length: 500 })
    delivery_address: string;

    @Column({ type: 'varchar', nullable: true, length: 1000 })
    other_info?: string;
}