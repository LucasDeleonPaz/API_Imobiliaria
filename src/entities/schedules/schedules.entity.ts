import { PrimaryGeneratedColumn, Entity, Column, Timestamp, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "../users/users.entity";
import { Properties } from "../properties/properties.entity";

@Entity('Schedules')

export class Schedules {

    @PrimaryGeneratedColumn('uuid')
    readonly id : string

    @Column({type: "date"})
    date: string

    @Column({type: "time"})
    hour: string

    @ManyToOne(() => Properties, property=> property.schedules ,{eager: true})
    @JoinColumn({name: "propertyId"})
    propertyId: Properties;

    @ManyToOne(() => Users, user => user.schedules, {eager: true})
    @JoinColumn({name: "userId"})
    user: Users
}

