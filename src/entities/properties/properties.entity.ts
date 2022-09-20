import { PrimaryGeneratedColumn, Entity, Column, OneToOne, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Address } from "../address/address.entity";
import { Categories } from "../categories/categories.entity";
import { Schedules } from "../schedules/schedules.entity";

@Entity('Properties')

export class Properties {

    @PrimaryGeneratedColumn('uuid')
    readonly id : string

    @Column()
    value: number

    @Column({unique: true})
    size: number

    @OneToOne(() => Address, {eager: true})
    @JoinColumn({name: "address"})
    address: Address

    @ManyToOne(() => Categories, {eager: true})
    @JoinColumn({name: "category"})
    category: Categories

    @Column({default: false})
    sold: boolean

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    @OneToMany((type) => Schedules, schedules => schedules.propertyId)
    schedules: Schedules[];
}

