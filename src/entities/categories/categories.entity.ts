import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity('Categories')

export class Categories {

    @PrimaryGeneratedColumn('uuid')
    readonly id : string

    @Column()
    name: string

}

