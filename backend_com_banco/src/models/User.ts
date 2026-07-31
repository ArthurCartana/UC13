import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length:100 ,nullable: false })
    name: string

    @Column({ length:255 ,nullable: false, unique: true })
    email: string

    @Column({ length: 255, nullable: false })
    password: string

}