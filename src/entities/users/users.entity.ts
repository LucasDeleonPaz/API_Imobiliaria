import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from "typeorm";
import { Schedules } from "../schedules/schedules.entity";

@Entity('Users')

export class Users {

    @PrimaryGeneratedColumn('uuid')
    readonly id : string

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Column()
    isAdm: boolean

    @Column({default: true})
    isActive: boolean

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    @OneToMany(() => Schedules, schedule => schedule.user)
    schedules: Schedules[];
}

